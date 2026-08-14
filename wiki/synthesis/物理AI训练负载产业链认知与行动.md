# 物理AI训练负载：产业链认知与行动全景图

> 本报告基于 2026-08-14 的联网搜索结果，系统梳理芯片、AI Infra、模型和学术研究领域对物理AI（Physical AI）训练负载的认知和行动。旨在为训练芯片孵化方向提供竞争参照和空白识别。
> 
> Raw: [physical-ai-training-workload-landscape.md](../../raw/sources/physical-ai-training-workload-landscape.md)
> Updated: 2026-08-14

## 一、核心发现

1. **NVIDIA 已建立物理AI训练的"三计算机"闭环垄断**——DGX（训练）+ Omniverse/Isaac Sim（仿真数据生成）+ Jetson（边缘部署），配合 GR00T VLA 模型和 Cosmos 世界基础模型，是当前唯一端到端的物理AI训练基础设施栈。这对孵化方向意味着**必须在某个维度提供 NVIDIA 无法覆盖或成本过高的差异化能力**。

2. **物理AI训练负载与传统LLM训练存在根本性差异**——仿真数据生成、VLA 多模态训练、世界模型自监督学习、RL 策略优化和 sim-to-real 迁移构成五大差异化计算负载类型，每个都有独特的硬件需求和瓶颈。

3. **物理AI训练的数据瓶颈正在催生新基础设施层**——Scale AI 的 Physical AI Data Engine（估值 $14B）、北京大学 HumanNet、多家公司的合成数据方案表明，机器人训练数据的采集、标注、生成和验证正在成为独立的基础设施层。

4. **开源物理AI训练生态快速形成但碎片化严重**——Hugging Face LeRobot（26,600+ stars）、NVIDIA Cosmos 开源世界模型、Google DeepMind MuJoCo 等形成了松散开源栈，但缺乏统一训练框架和标准化负载基准。

5. **中国在物理AI训练研究上投入密集但芯片层面完全依赖 NVIDIA**——清华、北大、上交、腾讯 Robotics X 等机构在 VLA 模型、世界模型方面有大量研究成果，但国内 AI 芯片公司（华为昇腾、寒武纪等）**尚未针对物理AI训练负载做任何专项优化**。

## 二、芯片公司：物理AI训练硬件布局

### 2.1 海外巨头

#### NVIDIA — 物理AI训练的主导者

| 维度 | 内容 |
|------|------|
| 物理AI产品矩阵 | Blackwell B200/B300 + DGX（训练）、Isaac Sim on Omniverse（仿真/合成数据）、Cosmos 3 世界基础模型（16B/64B）、GR00T 1.7 VLA 模型（3B）、Jetson Thor/T2000/T3000（边缘部署）、Halos 功能安全系统 |
| 关键架构创新 | Cosmos 3 采用 Mixture-of-Transformers 架构，支持物理AI推理、世界生成和动作生成三种工作模式；GR00T-N1.5 在千卡 GPU 上实现 40x 加速 |
| 开源策略 | Cosmos 世界基础模型开源（NVIDIA Open Model License），GR00T 平台开源，Isaac Lab 开源 RL 和模仿学习框架 |
| 对孵化的启示 | NVIDIA 的"三计算机"架构定义了物理AI训练负载的完整轮廓，必须在其基础上找到差异化突破点 |

**Cosmos 3 平台**：NVIDIA Cosmos 3 世界基础模型提供两个规模——Nano（16B，可在 RTX PRO 6000 工作站 GPU 运行）和 Super（64B，运行在 Hopper/Blackwell 数据中心 GPU）。支持 Text2World、Image2World、Video2World 三种生成模式。Cosmos-Predict2.5 和 Cosmos-Transfer2.5 在 2B 和 14B 规模上开源。NVIDIA 还发表了 World Action Models 作为 VLA 替代方案的研究。

**GR00T 平台**：开源人形机器人端到端策略开发平台，核心模型 GR00T 1.7 是 3B 参数的 VLA 模型，覆盖训练数据生成、策略训练、仿真验证到边缘部署的完整流程。

#### AMD — 通用训练硬件，无物理AI专项优化

Instinct MI300X/MI325X/MI350 系列可在硬件上运行物理AI训练负载，但**缺乏物理AI专项优化**——无专用仿真引擎、无 VLA 模型训练框架、无机器人 SDK。ROCm 生态成熟度远低于 CUDA。AMD 证明了通用 AI 芯片无法自动满足物理AI训练需求——**软件栈和算法优化才是壁垒，而非硬件算力规格**。

#### Intel — 通用硬件，机器人资产剥离中

Gaudi 3 作为通用 AI 加速器可训练物理AI 模型，但无专项优化。RealSense 深度相机已剥离，机器人相关软件栈基本空白。

#### Google — 自研芯片 + 顶级物理AI研究

TPU v5/v6 是通用 AI 训练芯片，主要面向 Google 内部工作负载。DeepMind 的物理AI研究（Gemini Robotics、Genie 3 世界模型、DreamerV2、SIMA 2）处于全球最前沿，但 **TPU 硬件与物理AI研究之间缺乏像 NVIDIA 那样的"三计算机"整合**。MuJoCo 物理引擎开源且支持 GPU 加速（MJX/JAX 和 MuJoCo Warp 后端）。

#### AWS — 自研芯片 + 收缩中的机器人服务

Trainium 1/2 是通用 AI 训练芯片；AWS RoboMaker 提供机器人仿真服务，但 2024 年已停止新客户注册。AWS 的物理AI infra 投入正在收缩，表明云计算巨头对物理AI训练的 ROI 仍在观望。

### 2.2 国内头部

| 公司 | 产品 | 物理AI相关性 | 差距分析 |
|------|------|-------------|---------|
| **华为昇腾** | 910B/910C，CANN 软件栈 | 间接相关。国内唯一具备物理AI训练潜力的芯片平台，但未见针对物理AI/机器人训练负载的专项优化 | 缺乏物理AI仿真/合成数据生成能力，无机器人 SDK，CANN 生态与 CUDA 差距显著 |
| **寒武纪** | 思元 590/690 | 无专项物理AI优化 | 通用 AI 训练芯片，缺乏机器人仿真/VLA 训练优化 |
| **摩尔线程** | MTT S4000 | 无专项物理AI优化 | 主要面向图形和通用 AI |
| **壁仞科技** | BR100/BR104 | 无专项物理AI优化 | 通用 GPGPU |
| **沐曦** | MXN GPU | 无专项物理AI优化 | 通用 GPU 架构 |
| **燧原** | 云燧 T20/T21 | 无专项物理AI优化 | 通用 AI 训练芯片 |

**关键发现：** 国内所有 AI 芯片公司目前均未针对物理AI训练负载做任何专项优化。VLA 模型训练、世界模型训练、仿真数据生成、RL 策略优化等负载在国产芯片上缺乏加速方案。**这是一个明确的空白市场。**

### 2.3 海外初创

#### Tesla Dojo — 物理AI训练专用芯片最激进的探索

| 维度 | 内容 |
|------|------|
| 架构 | D1 芯片（7nm 定制 ASIC，500亿晶体管，645mm²，354 核/片，440MB SRAM，376 TFLOPS BF16/CFloat8），ExaPOD 包含 3,000 颗 D1 芯片 |
| 激进设计 | 取消缓存一致性，无虚拟内存，基于快速分布式 SRAM，定制 CFloat8/CFloat16 格式，针对视频神经网络训练优化 |
| 历史 | 2025年8月传解散，2026年1月重启为 Dojo3，定位为"首个全自研硬件的 Tesla 超算，无 NVIDIA 依赖" |
| 对孵化的启示 | Dojo 的激进架构设计（去一致性、去虚拟内存、定制低精度、分布式 SRAM）是物理AI训练芯片架构的重要参考，表明**视频密集型训练负载可能需要与传统 LLM 训练完全不同的硬件架构** |

#### Groq — 被 NVIDIA 收购，物理AI未涉及

LPU 推理专用芯片，2025年12月 NVIDIA 以 ~$20B 获得技术授权。物理AI相关性有限。

#### Tenstorrent — 开放架构，物理AI未涉及

Tensix 核心 + RISC-V CPU，支持通用 AI 训练但无物理AI专项优化。开放架构策略和 IP 许可模式值得参考。

#### Cerebras、Graphcore、SambaNova — 均未涉及物理AI

WSE-3（晶圆级处理器）、IPU（被 SoftBank 收购）、SN40L RDU（融资 ~$1.1B，估值 $5.1B），均未对物理AI训练负载做专项优化。

### 2.4 国内初创

地平线、黑芝麻、后摩智能、此芯科技、亿铸科技等国内初创 AI 芯片公司**无一针对物理AI训练负载布局**。训练芯片端完全空白。

## 三、AI Infra 与软件公司：物理AI训练平台

### 3.1 仿真与合成数据生成平台

| 公司/产品 | 方向 | 核心能力 | 进展 | 融资/状态 |
|-----------|------|---------|------|----------|
| **NVIDIA Isaac Sim** | 物理仿真 | Omniverse 上的物理精确仿真，用于机器人策略验证和合成数据生成 | 生产级，广泛使用 | 公开上市公司 |
| **NVIDIA Isaac Lab** | 机器人学习框架 | 开源 RL 和模仿学习框架，支持 sim-to-real 迁移；Sanctuary AI 使用后实现 99.5%+ 工业任务成功率 | 生产级，社区活跃 | 同上 |
| **NVIDIA Cosmos** | 世界基础模型/合成数据 | Mixture-of-Transformers 世界基础模型，生成无限合成训练数据 | Cosmos 3 已发布，2B/14B 开源 | 同上 |
| **Google DeepMind MuJoCo** | 物理引擎 | 多关节动力学的快速精确仿真，支持 GPU 加速（MJX for JAX, MuJoCo Warp） | 开源，广泛用于机器人研究 | Alphabet 旗下 |
| **Open Robotics Gazebo** | 机器人仿真 | 精确物理引擎，ROS 生态核心 | 开源 | 非营利组织 |
| **Intrinsic Flowstate** | 工业自动化开发 | 感知训练、运动规划、sim-to-real 部署 | 由 Google X 孵化，独立运营 | 未公开融资 |

**分析与启示**：仿真和合成数据生成是物理AI训练区别于传统 LLM 训练的核心特征。NVIDIA 在这一层的垄断地位比训练硬件层更强——Isaac 生态 + Cosmos 世界模型 + Omniverse 仿真构成了不可替代的入口。**国产替代方案尚未出现，这是空白但也是高壁垒领域。**

### 3.2 机器人基础模型与训练平台

| 公司/产品 | 方向 | 核心能力 | 进展 | 融资 |
|-----------|------|---------|------|------|
| **Physical Intelligence (π)** | 通用机器人策略 | π0 → π0.7（VLA 多任务通用策略），零样本跨形态任务执行 | 多机器人数据收集 + RL + 人类视频迁移 + 记忆系统 | Bond, Bezos, Khosla, Lux, OpenAI, Sequoia, CapitalG, Thrive Capital 等 |
| **Skild AI** | 机器人基础模型 | Skild Brain（全形态统一大脑），通过人类视频学习 | 安全巡检、移动操作、自主包装等场景 | Felicis, General Catalyst, Sequoia, SoftBank, Menlo, CRV, Coatue, Amazon, Bezos |
| **Figure AI** | 人形机器人 + VLA | Helix VLA 模型（01/02），动捕+仿真 ML 训练，740+ 台机器人部署 | Helix 02 扩展到全身功能自主，BotQ 工厂年产 12,000 台 | 2025年9月 C 轮 >$1B，估值 $39B |
| **Sanctuary AI** | 工业物理AI软件 | 使用 Isaac Lab 训练灵巧操作，99.5%+ 工业任务成功率 | 8代 Phoenix 机器人 | Zeon 战略投资 |
| **Hugging Face LeRobot** | 开源机器人 AI 库 | 26,600+ stars，统一硬件接口，标准化数据格式，支持 ACT/Diffusion/VQ-BeT/HIL-SERL 等多种策略 | Apache 2.0 开源，社区活跃 | Hugging Face D 轮 2023，$4.5B+ |

**分析与启示**：
- 通用机器人基础模型是物理AI训练的核心工作负载定义者
- π0 系列和 Helix 系列代表 VLA 路线的两个主要方向，Cosmos 和 Genie 代表世界模型路线
- 模型公司定义训练负载需求，芯片公司提供硬件——**模型公司与芯片公司的共生关系是关键**
- LeRobot 的开源聚合策略正在成为物理AI训练领域的"PyTorch 生态"入口

### 3.3 数据基础设施

| 公司/产品 | 方向 | 核心能力 | 进展 | 融资 |
|-----------|------|---------|------|------|
| **Scale AI (Physical AI Data Engine)** | 机器人训练数据 | 全球数据工厂网络、分布式采集器、多模态标注 + 专家人类反馈验证 | 生产级，SOC 2 Type II + ISO 27001 认证 | 2024年5月 $1B（Amazon, Meta），估值 $14B；2025年6月 Meta 以 ~$14.8B 收购 49% 股份 |
| **Agility Robotics Arc** | 机器人云平台 | Digit 机器人部署在真实仓库，Arc 云平台管理运营，RaaS 模式产生真实世界数据 | 2024年首个 RaaS 合同（GXO Logistics） | 通过 SPAC 上市 |

**对孵化的启示**：数据瓶颈是物理AI训练面临的最大挑战。Scale AI 被 Meta 以天价估值入股表明，**物理AI训练数据正在成为战略级资产**。理解数据采集和标注的计算需求是定义训练负载的重要输入。

## 四、模型与算法公司：物理AI训练需求定义

### 4.1 世界模型（World Foundation Models）

| 研究方                 | 模型               | 架构                      | 规模                       | 训练数据        |
| ------------------- | ---------------- | ----------------------- | ------------------------ | ----------- |
| **NVIDIA**          | Cosmos 3         | Mixture-of-Transformers | 16B (Nano) / 64B (Super) | 200M 精选视频片段 |
| **Google DeepMind** | Genie 3          | 交互式世界生成模型               | 未公开                      | 大规模视频数据     |
| **Google DeepMind** | DreamerV2        | 离散世界模型                  | 未公开                      | Atari 游戏    |
| **腾讯 Robotics X**   | HY-Embodied-0.5  | Mixture-of-Transformers | 2B (边缘) / 32B (推理)       | 未公开         |
| **Open GigaAI**     | GigaWorld-0      | 视频+3D 世界模型              | 未公开                      | 未公开         |
| **AgiBot**          | tau0-World Model | 统一视频-动作世界模型             | 未公开                      | 未公开         |
| **华为**              | PSG-JEPA         | JEPA 物理基元世界模型           | 未公开                      | 未公开         |
| **comma.ai**        | 驾驶世界模型           | 端到端世界模型                 | 未公开                      | 驾驶数据        |

**世界模型训练负载特征**：
- 视频数据密集型（不同于 LLM 的文本数据）
- 需要物理约束和因果关系的建模
- 多模态（视觉 + 动作 + 物理状态），需要异构计算
- 训练需要大规模并行仿真
- 不同架构选择（Transformer、MoE、JEPA、SSM）对硬件需求差异大

### 4.2 VLA 模型（Vision-Language-Action Models）

| 研究方 | 模型 | 参数规模 | 关键特性 | 训练数据 |
|--------|------|---------|---------|---------|
| **NVIDIA** | GR00T 1.7 | 3B | 人形机器人 VLA，端到端策略开发 | 多模态机器人数据 |
| **Physical Intelligence** | π0 → π0.7 | 未公开 | 零样本跨形态任务执行，通用策略 | 多机器人多任务数据 |
| **Figure AI** | Helix 01/02 | 未公开 | 全身功能自主，动捕 + 仿真数据 | 动捕 + 仿真数据 |
| **腾讯** | HY-Embodied-0.5 | 2B/32B | 边缘 + 推理双模型，MoT 架构 | 未公开 |
| **AMAP (AutoNavi)** | ABot-M0 | 未公开 | 动作流形学习 | UniACT 数据集 6M+ 轨迹 |
| **上海交通大学** | UniviewVLA | 未公开 | 统一 VLA 操作 | 未公开 |
| **复旦大学** | CoWVLA | 未公开 | 世界模型链 + VLA 策略 | 未公开 |
| **港科大（广州）** | World-VLA-Loop | 未公开 | 世界模型 + VLA 闭环 | 未公开 |
| **中山大学 HCP Lab** | VGA | 未公开 | 视觉-几何映射，取代语言 backbone | 3D 表示预训练 |
| **EO-Robotics** | EO-1 | 未公开 | 交错视觉-文本-动作预训练 | EO-Data1.5M 数据集 |
| **清华大学** | ACE-Brain-0 | 未公开 | 空间智能作为共享骨架 | 未公开 |

**VLA 模型训练负载特征**：
- 视觉编码器（ViT 类）训练需要大量图像/视频数据
- 语言模型部分（LLM backbone）训练需求与传统 LLM 类似
- 动作解码器训练需要机器人本体数据（关节角度、扭矩、力反馈等）
- 多模态对齐训练（视觉-语言-动作联合训练）需要特殊的数据管道
- 仿真到真机的迁移训练需要 RL 和 sim-to-real 循环

### 4.3 强化学习与策略优化

| 研究方 | 方向 | 关键发现 |
|--------|------|---------|
| **Sanctuary AI** | 灵巧操作 RL | 使用 Isaac Lab 实现 99.5%+ 工业任务成功率 |
| **Physical Intelligence** | 高效在线 RL | 从 VLA 模型提取 RL Token 进行高效在线 RL |
| **MIT CSAIL** | 耦合局部/全局世界模型 | 耦合局部和全局世界模型提升 RL 效率 |
| **Oxford** | TWIST 教师-学生世界模型蒸馏 | 世界模型蒸馏实现高效机器人学习 |

**RL 训练负载特征**：
- 需要大规模并行仿真环境（数万到数百万并行环境）
- 策略网络推理 + 价值网络评估 + 环境交互的循环
- 仿真环境需要 GPU 加速（如 MuJoCo Warp）
- 训练数据是闭环生成的（不是静态数据集）
- 需要低延迟的环境反馈（影响训练吞吐量）

## 五、学术研究：物理AI训练负载特征分析

### 5.1 训练负载类型分类

| 负载类型 | 描述 | 计算密集点 | 内存/带宽需求 | 参数量级 |
|----------|------|-----------|-------------|---------|
| **仿真数据生成** | 通过物理仿真引擎生成合成训练数据 | 物理引擎计算（碰撞检测、刚体动力学、流体模拟）；大规模并行环境 | 中 | N/A |
| **世界模型训练** | 预测物理世界状态变化的自监督/生成式模型 | 视频处理 Transformer；MoE 路由；注意力机制 | 极高（视频序列 HBM） | 2B-64B |
| **VLA 模型训练** | 视觉-语言-动作联合基础模型训练 | 视觉编码器 + LLM + 动作解码器联合训练 | 极高（多模态数据） | 1B-30B+ |
| **RL 策略优化** | 基于环境反馈的策略迭代优化 | 策略推理 + 价值估计 + 环境交互循环 | 低-中 | 相对小 |
| **数据预处理与标注** | 机器人操作数据采集、标注、验证 | 视频处理、多模态标注、传感器融合 | 中 | N/A |

### 5.2 计算需求特征对比

| 维度 | 物理AI训练 | 传统 LLM 训练 | 差异 |
|------|-----------|-------------|------|
| **主要数据类型** | 视频 + 传感器时序 + 动作序列 + 3D 几何 | 文本 Token | 物理AI 数据维度更高、更异构 |
| **序列长度** | 视频帧序列（数百到数千帧） | 文本 Token（数千到数万） | 物理AI 序列更长，注意力计算复杂度更高 |
| **精度需求** | FP16/BF16/FP8 为主，但物理仿真部分可能需要 FP32 | FP8/FP16/BF16 | 物理仿真精度要求高于纯 LLM |
| **并行化模式** | 数据并行 + 环境并行 + 模型并行 | 数据并行 + 模型并行 + 张量并行 | 物理AI 需要额外的环境并行维度 |
| **存储访问模式** | 视频数据流式读取 + 仿真状态随机访问 | 文本数据顺序或随机读取 | 物理AI 的访问模式更接近 HPC 而非 LLM |
| **通信模式** | 模型参数同步 + 环境状态同步 | 模型参数同步 + 梯度同步 | 物理AI 的通信模式更复杂 |
| **内存占用** | 视频处理需要大 HBM；仿真状态管理 | 模型参数 + KV Cache + 优化器状态 | 物理AI 训练可能更吃内存带宽而非容量 |

### 5.3 学术机构分布

**美国**：Stanford University（VLA、世界模型、sim-to-real）、MIT CSAIL（世界模型 RL）、UC Berkeley（sim-to-real 基础研究）、CMU（人类视频结构化世界模型）

**中国**：清华大学（ACE-Brain-0 通用基础模型）、北京大学（HumanNet 百万小时人类视频）、上海交通大学（UniviewVLA 操作模型）、复旦大学（CoWVLA 世界模型链 VLA）、中山大学 HCP Lab（VGA 视觉-几何-动作模型）、港科大（广州）（World-VLA-Loop 闭环）、南京大学（具身智能综述）

**其他**：ETH Zurich（四旋翼世界模型、四足机器人 RL）、Oxford（TWIST 世界模型蒸馏）、TU Darmstadt（VLA/世界模型局限性）、KAIST（Sparse Imagination 高效世界模型）、TU Delft（解析世界模型，物理+学习混合）

## 六、关键空白与机会

### 6.1 芯片层空白

| 空白领域 | 描述 | 竞争情况 | 机会评估 |
|----------|------|---------|---------|
| **物理AI训练专用加速器** | 目前无任何芯片公司针对物理AI训练负载做专用加速 | NVIDIA 通用 GPU 垄断，但非物理AI专用 | 高——最大空白，但需精确定义负载特征 |
| **仿真加速芯片** | 物理仿真目前完全在 CPU/GPU 上运行 | 无专用加速器 | 中——市场有限，但可整合在训练芯片中 |
| **视频数据预处理芯片** | 机器人训练视频数据的解码、标注、增强的专用加速 | 无专用方案 | 中——可集成在训练芯片中 |
| **国产物理AI训练芯片** | 国内无任何芯片公司针对物理AI训练做优化 | 华为昇腾最接近但无专项优化 | 高——制裁环境下的国产替代需求明确 |

### 6.2 软件栈空白

| 空白领域 | 描述 | 竞争情况 | 机会评估 |
|----------|------|---------|---------|
| **物理AI训练框架** | 针对 VLA + 世界模型 + RL 的联合训练框架 | 只有 NVIDIA Isaac Lab 和 LeRobot 部分覆盖 | 高——独立于 NVIDIA 的物理AI训练框架是巨大空白 |
| **物理AI基准测试** | 标准化的物理AI训练负载基准 | 不存在 | 高——定义负载本身就有价值 |
| **机器人数据管道** | 从采集到训练的数据全链路管道 | Scale AI 部分覆盖，但非开源 | 高——开源替代方案 |
| **国产物理AI仿真平台** | 替代 Isaac Sim 的国产仿真平台 | 空白 | 中——高壁垒但战略价值大 |

### 6.3 市场空白

| 空白领域 | 描述 | 机会评估 |
|----------|------|---------|
| **物理AI训练云服务** | 专门针对机器人训练优化的云服务 | 高——AWS/GCP 未专项覆盖 |
| **物理AI训练数据市场** | 机器人训练数据的交易和标注平台 | 中——Scale AI 覆盖但未垄断 |
| **中小型机器人公司训练方案** | 针对买不起 DGX 集群的中小公司的训练方案 | 高——市场大但分散 |
| **物理AI训练芯片 IP 许可** | 针对物理AI训练的芯片 IP 可授权给其他公司 | 中——Tenstorrent 模式可参考 |

## 七、对我们的参考意义

### 7.1 核心定位选项

**选项 A：物理AI训练专用加速器（推荐）**
- 聚焦 VLA 模型训练 + 世界模型推理
- 差异化 vs NVIDIA：在特定负载上实现 2-10x 性价比优势
- 风险：NVIDIA 下一代产品可能缩小差距
- 需要：精确的物理AI训练负载分析 + 与模型公司合作定义规格

**选项 B：物理AI训练 + 仿真一体化芯片**
- 整合训练加速和物理仿真加速
- 差异化：减少训练过程中 CPU/GPU 间数据传输
- 风险：芯片面积和复杂度大

**选项 C：物理AI训练数据管道芯片**
- 聚焦视频数据预处理、多模态数据编码、标注加速
- 差异化：训练链路中的"暗数据"处理
- 风险：市场容量有限

### 7.2 关键架构启示

基于 Tesla Dojo、Cosmos、GR00T 等方案的分析：

1. **视频处理是核心**：物理AI训练中最消耗计算的是视频数据，芯片架构应针对视频序列处理优化（长序列注意力、视频编解码、光流/运动估计）

2. **低精度训练是实现性价比的关键路径**：Dojo 的 CFloat8/CFloat16、Cosmos 的 FP8 训练表明，在物理AI训练中定制精度格式可能是差异化优势

3. **内存层次设计需要重新思考**：物理AI训练的内存访问模式（视频流式 + 仿真随机访问）与传统 LLM 训练不同，可能需要更大的 SRAM 或更宽的 HBM 接口

4. **仿真与训练的计算融合**：芯片层面支持仿真计算和神经网络计算的融合可能减少通信开销

5. **分布式训练模式不同**：物理AI训练需要额外的"环境并行"维度，芯片互联架构需要支持不同于传统 LLM 训练的通信模式

### 7.3 合作伙伴与生态建设优先级

| 优先级 | 合作伙伴类型 | 具体方向 | 原因 |
|--------|-------------|---------|------|
| 最高 | 模型公司 | Physical Intelligence、Figure AI、Skild AI | 定义训练负载需求，提供验证场景 |
| 高 | 开源社区 | Hugging Face LeRobot、开源世界模型 | 降低软件栈构建成本，建立生态 |
| 高 | 研究机构 | Stanford、清华、北大 | 获取前沿负载认知，吸引人才 |
| 中 | 数据公司 | Scale AI | 理解数据管道计算需求 |
| 中 | 仿真平台 | 开源仿真引擎 | 整合仿真加速能力 |

### 7.4 时间窗口判断

| 维度 | 时间窗口 | 判断依据 |
|------|---------|---------|
| 物理AI训练芯片市场 | 2-3 年（2026-2029） | 物理AI仍处于早期，训练需求尚未定型 |
| NVIDIA 物理AI壁垒强化 | 持续加速 | Cosmos → GR00T → Isaac，NVIDIA 正在快速建立物理AI软件栈 |
| 国产替代窗口 | 1-2 年 | 制裁环境下国产替代需求迫切，但客户对芯片性能要求也在提高 |
| 开源生态成熟 | 1-2 年 | LeRobot、MuJoCo、开源世界模型正在快速成熟 |

**初步判断**：物理AI训练芯片孵化的时间窗口在 2-3 年内，但必须立即行动以：(1) 在 NVIDIA 物理AI软件栈完全锁定生态之前建立差异化定位；(2) 在物理AI训练负载标准化之前参与定义；(3) 在国产替代需求窗口期内完成产品定义和验证。

## 八、关键信息来源

### 芯片公司
- [NVIDIA Developer Blog - Robotics](https://developer.nvidia.com/blog/category/robotics/)
- [NVIDIA Isaac GR00T](https://developer.nvidia.com/blog/develop-humanoid-robot-policies-end-to-end-with-nvidia-isaac-gr00t/)
- [NVIDIA Cosmos 3](https://developer.nvidia.com/blog/develop-physical-ai-reasoning-world-and-action-models-with-nvidia-cosmos-3/)
- [NVIDIA WAMs](https://developer.nvidia.com/blog/beyond-vlas-how-world-action-models-reshape-robot-manipulation/)
- [Tesla Dojo](https://en.wikipedia.org/wiki/Tesla_Dojo)

### AI Infra 与软件
- [NVIDIA Isaac GR00T Platform](https://developer.nvidia.com/isaac/gr00t)
- [NVIDIA Cosmos](https://www.nvidia.com/en-us/ai/cosmos/)
- [Physical Intelligence](https://www.pi.website/)
- [Skild AI](https://www.skild.ai/)
- [Figure AI](https://www.figure.ai/)
- [Sanctuary AI](https://www.sanctuary.ai/)
- [Scale AI Robotics](https://scale.com/robotics)
- [Hugging Face LeRobot](https://github.com/huggingface/lerobot)
- [Google DeepMind MuJoCo](https://mujoco.readthedocs.io/en/stable/overview.html)

### 模型与研究
- [Google DeepMind Research](https://deepmind.google/discover/blog/)
- [NVIDIA Physical AI](https://www.nvidia.com/en-us/ai/physical-ai/)
- [腾讯 HY-Embodied](https://github.com/Tencent-Hunyuan/HY-Embodied)
- [AgiBot tau0-WM](https://finch.agibot.com/research/tau0-wm)
- [Open GigaWorld-0](https://giga-world-0.github.io/)