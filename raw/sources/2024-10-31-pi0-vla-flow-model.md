# pi0: A Vision-Language-Action Flow Model for General Robot Control

> 来源：Physical Intelligence 官方博客, arXiv:2410.24164
> 日期：2024-10-31
> 标签：pi0, VLA, Physical Intelligence, 机器人基础模型, flow matching

## 模型架构

- **基础 VLM**: PaliGemma（3B 参数开源视觉语言模型）
- **总参数量**: 3.3B（3B VLM 骨干 + 300M "action expert"）
- **Action expert**: 为机器人专用 token（状态和动作）单独训练的权重，从头初始化；尺寸缩减为 `{width=1024, mlp_dim=4096}` 以加速推理
- **动作建模**: 使用 conditional flow matching 建模连续动作分布，推理时采用 10 步 Euler 积分（δ=0.1）
- **动作分块**: Horizon H=50 未来动作/块
- **注意力掩码**: 分块因果掩码，3 个块：图像+语言、本体状态、带噪动作；块内全双向注意力
- **推理频率**: 20Hz 机器人每 0.8s 推理一次（16 个动作）；50Hz 机器人每 0.5s 推理一次（25 个动作）
- **时间步采样**: 采用 Beta 分布，偏向低（噪声大）时间步，截止值 s=0.999

## 训练数据

- **总预训练数据**: 超过 10,000 小时机器人数据
- **自有数据集**: 903M 时间步，覆盖 7 种机器人配置，68 个任务（106M 单臂，797M 双臂）
- **开源数据**: 9.1% 来自 OXE、Bridge v2 和 DROID
- **任务加权**: 每个任务-机器人组合按 n^0.43 加权，降低过表示组合
- **机器人平台**: UR5e、Bimanual UR5e、Franka、Bimanual Trossen、Bimanual ARX/AgileX、Mobile Trossen/ARX、Mobile Fibocom + OXE 的 22 种机器人
- **后训练数据**: 从 5 小时（最简单任务）到 100+ 小时（最复杂任务）

## 训练流程

- **两阶段**: 预训练（多样化广泛覆盖）→ 后训练（针对特定任务的高质量策划数据）
- **预训练步数**: 主模型 700k 步
- **对比基线**: OpenVLA 训练 160k 步，Octo 训练 320k 步
- **语言标签**: 任务名称和片段标注的混合（~2 秒子轨迹标签）

## 推理硬件与延迟

- **测试硬件**: NVIDIA GeForce RTX 4090（消费级 GPU）
- **推理延迟**: 图像编码器 14ms + 观测前向 32ms + 10 步动作前向 27ms + 网络延迟 13ms = 总计 73ms（板载）/86ms（离板）
- 移动机器人采用离板 Wi-Fi 推理

## 非 VLM 基线（pi0-small）

- 470M 参数，无 VLM 初始化
- 使用 DistilBERT 编码语言，较小 ViT 编码器（R26-S-32），编码器-解码器架构
- DiT 架构作为 action expert，使用 AdaLN-Zero 层进行时间步调节

## 关键创新

1. 首次将预训练 VLM（PaliGemma）与 flow matching 结合用于高频动作生成
2. Action expert 设计类似混合专家（MoE）的两个元素
3. 本体状态和动作使用独立于 VLM 骨干的专用权重
4. 只有自注意力层在专家之间共享；VLM 骨干和 action expert 的宽度和 MLP 维度不同

## 核心局限与挑战

- 论文未公开训练计算预算（GPU 小时数、集群规模）
- 后训练需要大量高质量数据（5-100+ 小时/任务），限制了规模化
- 推理依赖离板 GPU，移动机器人需解决网络延迟
- 模型架构（VLM + flow matching）的推理计算量远大于纯语言模型