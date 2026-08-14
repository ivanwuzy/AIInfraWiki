# 物理AI训练负载：产业链认知与行动全景图

> 本报告基于 2026-08-14 的联网搜索结果，系统梳理芯片、AI Infra、模型和学术研究领域对物理AI（Physical AI）训练负载的认知和行动。旨在为训练芯片孵化方向提供竞争参照和空白识别。
> Updated: 2026-08-14

---

## 一、核心发现摘要

1. **NVIDIA 已建立物理AI训练的"三计算机"闭环垄断**——DGX（训练）+ Omniverse/Isaac Sim（仿真数据生成）+ Jetson（边缘部署），配合 GR00T VLA 模型和 Cosmos 世界基础模型，形成了从训练数据生成到策略部署的完整护城河，这是目前唯一端到端的物理AI训练基础设施栈。

2. **物理AI训练负载与传统LLM训练存在根本性差异**——仿真数据生成（Cosmos、Isaac Sim）、多模态 VLA 模型训练、世界模型自监督学习、RL 策略优化和 sim-to-real 迁移构成了五大差异化的计算负载类型，每个都有独特的硬件需求和瓶颈。

3. **物理AI训练的数据瓶颈正在催生新的基础设施需求**——Scale AI 的 Physical AI Data Engine、Peking University 的 HumanNet（百万小时人类视频）、以及多家公司的合成数据方案表明，机器人训练数据的采集、标注、生成和验证正在成为独立的基础设施层。

4. **开源物理AI训练生态正在快速形成但碎片化严重**——Hugging Face LeRobot（26,600+ stars）、NVIDIA Cosmos 开源世界模型、Google DeepMind MuJoCo、Open Robotics ROS/Gazebo 等形成了松散的开源栈，但缺乏统一的训练框架和标准化的负载基准。

5. **中国在物理AI训练研究上投入密集但芯片层面高度依赖 NVIDIA**——清华、北大、上交、复旦、Tencent Robotics X、AgiBot 等机构在 VLA 模型、世界模型、具身基础模型方面有大量研究成果，但训练芯片完全依赖进口，国内 AI 芯片公司（华为昇腾、寒武纪等）尚未针对物理AI训练负载做专门优化。

---

## 二、芯片公司：物理AI训练硬件布局

### 2.1 海外巨头

#### NVIDIA — 物理AI训练的主导者

| 维度 | 内容 |
|------|------|
| 背景 | 市值 >$2T，AI 训练基础设施的绝对主导者 |
| 物理AI产品矩阵 | Blackwell B200/B300 GPU + DGX 系统（训练）、Isaac Sim on Omniverse（仿真/合成数据）、Cosmos 3 世界基础模型（16B Nano/64B Super）、GR00T 1.7 VLA 模型（3B 参数）、Jetson Thor/T2000/T3000（边缘部署）、Halos 功能安全系统 |
| 关键架构创新 | Cosmos 3 采用 Mixture-of-Transformers 架构，支持物理AI推理、世界生成和动作生成三种工作模式；GR00T-N1.5 在千卡 GPU 分布式训练上实现 40x 加速 |
| 开源策略 | Cosmos 世界基础模型开源（NVIDIA Open Model License），GR00T 平台开源，Isaac Lab 开源 RL 和模仿学习框架 |
| 对我们的启示 | NVIDIA 的"三计算机"架构定义了物理AI训练负载的完整轮廓，孵化方向必须在某个维度上提供 NVIDIA 无法覆盖或成本过高的差异化能力 |

**Cosmos 3 平台详解**：NVIDIA Cosmos 3 世界基础模型提供两个规模版本——Nano（16B 参数，可在 RTX PRO 6000 工作站 GPU 上运行）和 Super（64B 参数，运行在 Hopper/Blackwell 数据中心 GPU 上）。平台提供开放的 post-training recipes（SFT 和面向动作的训练），支持 Text2World、Image2World、Video2World 三种生成模式。Cosmos-Predict2.5 和 Cosmos-Transfer2.5 后训练版本在 2B 和 14B 规模上开源。NVIDIA 还发表了 World Action Models (WAMs) 作为 VLA 替代方案的研究。

**GR00T 平台详解**：NVIDIA Isaac GR00T 是一个开源的人形机器人端到端策略开发平台，核心模型 GR00T 1.7 是 3B 参数的 VLA 模型。平台覆盖从训练数据生成、策略训练、仿真验证到边缘部署的完整流程。

#### AMD — 通用训练硬件，无物理AI专项优化

| 维度 | 内容 |
|------|------|
| 背景 | 市值 >$200B，Instinct GPU 是 NVIDIA 的主要通用 AI 训练替代方案 |
| 产品 | MI300X（304 CU, 192GB HBM3, 5.3 TB/s, 1307 TFLOPS FP16）、MI325X、MI350 系列 |
| 物理AI相关性 | 间接相关。硬件可运行物理AI训练负载，但缺乏物理AI专项优化（无专用仿真引擎、无 VLA 模型训练框架、无机器人 SDK） |
| 关键差距 | ROCm 生态成熟度远低于 CUDA，无物理AI/机器人专用软件栈，市场定位为"NVIDIA 的替代品"而非物理AI方案提供商 |
| 对我们的启示 | AMD 证明了通用 AI 芯片无法自动满足物理AI训练需求——软件栈和算法优化才是壁垒，而非硬件算力规格 |

#### Intel — 通用硬件，机器人资产剥离中

| 维度 | 内容 |
|------|------|
| 背景 | 市值 ~$100B，拥有 Habana Labs (Gaudi 3)、Data Center GPU Max 系列 |
| 物理AI相关性 | 间接相关。Gaudi 3 作为通用 AI 加速器可训练物理AI模型，但无专项优化 |
| 机器人资产 | RealSense 深度相机已剥离，机器人相关软件栈基本空白 |
| 对我们的启示 | Intel 的现状表明，通用 AI 加速器公司难以在物理AI领域自然形成竞争力，需要专项投入 |

#### Google — 自研芯片 + 顶级物理AI研究

| 维度 | 内容 |
|------|------|
| 背景 | Alphabet 旗下，拥有 TPU v5/v6 和 DeepMind 研究团队 |
| 物理AI研究 | Gemini Robotics 系列（Gemini Robotics、ER-2、Gemini Robotics 2）、Genie 3 世界模型（交互式世界生成）、SIMA 2（3D 世界 Agent）、DreamerV2 世界模型、Agent 预训练和世界模型的 Scaling Laws（Tim Pearce 等） |
| 芯片与训练 | TPU 是通用 AI 训练芯片，主要面向 Google 内部工作负载（Gemini 训练等），物理AI 模型训练是否使用 TPU 未明确 |
| 开源贡献 | MuJoCo 物理引擎开源（支持 GPU 加速：MJX/JAX 和 MuJoCo Warp 后端），可在大规模并行仿真中用于机器人训练 |
| 对我们的启示 | Google 展示了顶级 AI 研究团队 + 自研芯片的组合威力，但 DeepMind 的物理AI研究与 TPU 硬件之间缺乏像 NVIDIA 那样的"三计算机"整合 |

#### AWS — 自研芯片 + 机器人服务

| 维度 | 内容 |
|------|------|
| 背景 | Amazon 旗下，Trainium 芯片和 AWS RoboMaker 服务 |
| 物理AI相关性 | Trainium 1/2 是通用 AI 训练芯片；AWS RoboMaker 提供机器人仿真服务（基于 ROS/Gazebo），但 2024 年已停止新客户注册 |
| 战略动向 | 通过 Amazon Industrial Innovation Fund 投资了多家机器人公司，与 Agility Robotics 有商业合作 |
| 对我们的启示 | AWS 的物理AI infra 投入正在收缩（RoboMaker 停止扩张），表明云计算巨头对物理AI训练的 ROI 仍在观望 |

---

### 2.2 国内头部

#### 华为昇腾 — 国内唯一具备物理AI训练潜力的芯片平台

| 维度 | 内容 |
|------|------|
| 产品 | 昇腾 910B/910C，CANN 软件栈，MindSpore 框架 |
| 物理AI相关性 | 间接相关。昇腾芯片在国内 AI 训练市场占据重要位置，但未见针对物理AI/机器人训练负载的专项优化。华为内部有物理AI研究（PSG-JEPA 物理基元世界模型），但芯片与研究的协同度不明 |
| 关键差距 | 缺乏物理AI仿真/合成数据生成能力，无机器人 SDK，CANN 生态与 CUDA 差距显著 |
| 对我们的启示 | 华为是物理AI训练芯片国产替代的最有力竞争者，但受制裁影响先进制程受限，且缺乏物理AI软件栈 |

#### 寒武纪、摩尔线程、壁仞科技、沐曦、燧原 — 通用 AI 芯片，物理AI 空白

| 公司 | 产品 | 物理AI相关性 | 差距分析 |
|------|------|-------------|---------|
| 寒武纪 | 思元 590/690 | 无专项物理AI优化 | 通用 AI 训练芯片，缺乏机器人仿真/VLA 训练优化 |
| 摩尔线程 | MTT S4000 | 无专项物理AI优化 | 主要面向图形和通用 AI，物理AI 未见布局 |
| 壁仞科技 | BR100/BR104 | 无专项物理AI优化 | 通用 GPGPU，未涉及物理AI 仿真或训练 |
| 沐曦 | MXN GPU | 无专项物理AI优化 | 通用 GPU 架构，未涉及物理AI 专项 |
| 燧原 | 云燧 T20/T21 | 无专项物理AI优化 | 通用 AI 训练芯片，未涉及物理AI |

**关键发现**：国内所有 AI 芯片公司目前均未针对物理AI训练负载做任何专项优化，VLA 模型训练、世界模型训练、仿真数据生成、RL 策略优化等负载在国产芯片上缺乏加速方案。这是一个明确的空白市场。

---

### 2.3 海外初创

#### Tesla Dojo — 物理AI训练专用芯片最激进的探索

| 维度 | 内容 |
|------|------|
| 架构 | D1 芯片（7nm 定制 ASIC, 500亿晶体管, 645mm², 354 核/片, 440MB SRAM, 376 TFLOPS BF16/CFloat8），ExaPOD 包含 3,000 颗 D1 芯片，目标 1 exaflop |
| 设计哲学 | 取消缓存一致性，无虚拟内存，基于快速分布式 SRAM，定制 CFloat8/CFloat16 格式，针对视频神经网络训练优化 |
| 历史 | 2025年8月传解散，2026年1月重启为 Dojo3，定位为"首个全自研硬件的 Tesla 超算，无 NVIDIA 依赖" |
| 物理AI相关性 | 极高。Dojo 专为视频神经网络训练设计，与 FSD 和 Optimus 人形机器人训练需求高度一致（大规模视频处理 + 计算机视觉 + 神经网络训练） |
| 对我们的启示 | Dojo 的激进架构设计（去一致性、去虚拟内存、定制低精度、分布式 SRAM）是物理AI训练芯片架构的重要参考，表明视频密集型训练负载可能需要与传统 LLM 训练完全不同的硬件架构 |

#### Groq — 被 NVIDIA 收购的推理芯片，训练空白

| 维度 | 内容 |
|------|------|
| 架构 | LPU（Language Processing Unit），确定性单核设计，功能切片微架构，无分支预测器/无缓存 |
| 历史 | 2025年12月 NVIDIA 以 ~$20B 获得 Groq 推理技术授权，创始人加入 NVIDIA。Groq 正在转型为推理云服务（GroqCloud） |
| 物理AI相关性 | 有限。Groq 是推理芯片，不是训练加速器，且针对 LLM 推理延迟优化，未涉及物理AI。在机器人边缘推理场景可能有应用但未验证 |
| 对我们的启示 | Groq 被 NVIDIA 收购表明推理芯片的独立价值，但物理AI训练芯片需要解决训练（而非推理）的独特挑战 |

#### Tenstorrent — 开放架构的 AI 芯片，物理AI未涉及

| 维度 | 内容 |
|------|------|
| 架构 | Tensix 核心 + RISC-V CPU，Wormhole/Blackhole/Grendel 产品线，开源软件栈（TT-Metalium, TT-BUDA） |
| 定位 | 更开放的 NVIDIA 替代方案，许可 IP 给其他公司，已宣布 IPO 计划 |
| 物理AI相关性 | 间接相关。支持通用 AI 训练，但无物理AI专项优化或机器人 SDK |
| 对我们的启示 | Tenstorrent 的开放架构策略和 IP 许可模式值得参考，但物理AI领域需要专项投入 |

#### Cerebras — 晶圆级芯片，物理AI未见布局

| 描述 | Cerebras WSE-3（晶圆级处理器）在通用 AI 训练方面有独特优势（大内存带宽、简化分布式训练），但未见针对物理AI/机器人训练负载的专项优化或研究。 |
|------|------|

#### Graphcore — 被收购，物理AI未涉及

| 描述 | Graphcore（IPU）被 SoftBank 收购，未涉及物理AI训练负载。 |
|------|------|

#### SambaNova — 数据流架构，物理AI未涉及

| 描述 | SN40L RDU（可重构数据流单元），融资 ~$1.1B，51亿美元估值（2021），2026年2月 Vista Equity Partners 和 Intel 领投新一轮。主要聚焦 LLM 推理，未涉及物理AI。 |
|------|------|

---

### 2.4 国内初创

| 公司 | 产品 | 物理AI训练关注度 | 差距与机会 |
|------|------|-----------------|-----------|
| 地平线 | Journey 系列自动驾驶芯片 | 低 | 聚焦自动驾驶边缘推理，未涉及训练芯片 |
| 黑芝麻 | 华山系列自动驾驶芯片 | 低 | 同地平线，边缘推理，无训练 |
| 后摩智能 | 存算一体 AI 芯片 | 低 | 通用 AI 推理加速，未涉及物理AI训练 |
| 此芯科技 | 通用 AI CPU | 低 | 通用计算，未涉及物理AI专项 |
| 亿铸科技 | 存算一体 AI 芯片 | 低 | 通用 AI，未涉及物理AI |

**重要发现**：国内初创 AI 芯片公司无一针对物理AI训练负载布局。地平线、黑芝麻等自动驾驶芯片公司在边缘推理方面有积累，但训练芯片端完全空白。

---

## 三、AI Infra 与软件公司：物理AI训练平台

### 3.1 仿真与合成数据生成平台

| 公司/产品 | 方向 | 核心能力 | 进展 | 融资/状态 |
|-----------|------|---------|------|----------|
| **NVIDIA Isaac Sim** | 物理仿真 | Omniverse 上的物理精确仿真，用于机器人策略验证和合成数据生成 | 生产级，广泛使用 | 公开上市公司 |
| **NVIDIA Isaac Lab** | 机器人学习框架 | 开源 RL 和模仿学习框架，支持 sim-to-real 迁移；Sanctuary AI 使用后实现 99.5%+ 工业任务成功率 | 生产级，社区活跃 | 同上 |
| **NVIDIA Cosmos** | 世界基础模型/合成数据 | 基于 Mixture-of-Transformers 的世界基础模型，生成无限合成训练数据；Text2World/Image2World/Video2World 三种模式 | Cosmos 3 已发布，2B/14B 开源 | 同上 |
| **Google DeepMind MuJoCo** | 物理引擎 | 多关节动力学的快速精确仿真，支持 GPU 加速（MJX for JAX, MuJoCo Warp for NVIDIA Warp） | 开源，广泛用于机器人研究 | Alphabet 旗下 |
| **Open Robotics Gazebo** | 机器人仿真 | 精确物理引擎，高质量图形，程序化接口，支持 sim-to-real | 开源，ROS 生态核心 | 非营利组织 |
| **Intrinsic Flowstate** | 工业自动化开发 | 感知训练（姿态估计器）、运动规划、传感器控制、sim-to-real 部署 | 由 Google X 孵化，已独立运营 | 未公开融资 |

**分析与启示**：
- 仿真和合成数据生成是物理AI训练区别于传统 LLM 训练的核心特征
- NVIDIA 在这一层的垄断地位比训练硬件层更强——Isaac 生态 + Cosmos 世界模型 + Omniverse 仿真构成了不可替代的入口
- 国产替代方案（如华为是否自建仿真平台）尚未出现，这是空白但也是高壁垒领域

### 3.2 机器人基础模型与训练平台

| 公司/产品 | 方向 | 核心能力 | 进展 | 融资 |
|-----------|------|---------|------|------|
| **Physical Intelligence (π)** | 通用机器人策略 | π0 → π0.7（VLA 多任务通用策略），多机器人数据收集 + RL + 人类视频迁移 + 记忆系统 | π0.7 零样本跨形态任务执行 | Bond, Bezos, Khosla, Lux, OpenAI, Sequoia, CapitalG, Thrive Capital 等 |
| **Skild AI** | 机器人基础模型 | Skild Brain（全形态统一大脑），通过人类视频学习，可控制任意机器人完成任意任务 | 安全巡检、移动操作、自主包装等场景 | Felicis, General Catalyst, Sequoia, SoftBank, Menlo, CRV, Coatue, Amazon, Bezos |
| **Figure AI** | 人形机器人 + VLA | Helix VLA 模型（Helix 01/02），动捕数据 + 仿真 ML 训练，~740 台机器人部署（2026年中） | Helix 02 扩展到全身功能自主，BotQ 工厂年产 12,000 台 | 2025年9月 C 轮 >$1B，估值 $39B |
| **Sanctuary AI** | 工业物理AI软件 | 使用 Isaac Lab 进行灵巧操作 sim-to-real 迁移，液压手触觉传感器，8代 Phoenix 机器人 | 99.5%+ 工业任务成功率 | Zeon 战略投资 |
| **Hugging Face LeRobot** | 开源机器人 AI 库 | 26,600+ GitHub stars，统一硬件接口，标准化数据集格式，支持 ACT/Diffusion/VQ-BeT/HIL-SERL/TDMPC/VLA/World Model 等多种策略 | Apache 2.0 开源，社区活跃 | Hugging Face 系列 D 2023，$4.5B+ |
| **Covariant** | 机器人 AI 平台 | Covariant Brain（仓库机器人操作平台），RL + 模仿学习 + 云端训练 | 网站仅显示 logo，可能处于转型期 | 此前多轮融资，现状不明 |

**分析与启示**：
- 通用机器人基础模型是物理AI训练的核心工作负载定义者，各公司正在定义不同的模型架构和训练范式
- π0 系列和 Helix 系列代表了 VLA 路线的两个主要方向，Cosmos 和 Genie 代表了世界模型路线
- 训练基础设施提供商（如 NVIDIA）和模型训练公司（如 π）之间存在共生关系——模型公司定义训练负载需求，芯片公司提供硬件
- LeRobot 的开源聚合策略值得关注——它正在成为物理AI训练领域的"PyTorch 生态"入口

### 3.3 数据基础设施

| 公司/产品 | 方向 | 核心能力 | 进展 | 融资 |
|-----------|------|---------|------|------|
| **Scale AI (Physical AI Data Engine)** | 机器人训练数据 | 全球数据工厂网络、分布式采集器（真实世界演示数据）、双手遥操作、无机器人第一人称采集（Scale Harness）、多模态标注 + 专家人类反馈验证 | 生产级，SOC 2 Type II + ISO 27001 认证 | 2024年5月 $1B（Amazon, Meta），估值 $14B；2025年6月 Meta 以 ~$14.8B 收购 49% 非投票权股份 |
| **Agility Robotics Arc** | 机器人云平台 | Digit 机器人部署在真实仓库，Arc 云平台管理运营，RaaS 模式产生真实世界数据 | 2024年首个 RaaS 合同（GXO Logistics），通过 SPAC 上市 | 与 Ford, Amazon, GXO 合作 |

**分析与启示**：
- 数据瓶颈是物理AI训练面临的最大挑战之一，Scale AI 的 Physical AI Data Engine 和 Agility 的 RaaS 模式代表了两种解决路径
- Scale AI 被 Meta 以天价估值入股表明，物理AI训练数据正在成为战略级资产
- 对于训练芯片孵化方向，理解数据采集和标注的计算需求（如 Harness 设备的数据处理、视频数据的预处理和标注）是定义训练负载的重要输入

---

## 四、模型与算法公司：物理AI训练需求定义

### 4.1 世界模型（World Foundation Models）

世界模型是物理AI训练的核心创新，它不同于传统 LLM 的文本生成或图像生成，而是试图预测物理世界的状态变化。世界模型的训练对计算硬件提出了独特要求。

| 研究方 | 模型 | 架构 | 规模 | 训练数据 | 物理AI相关性 |
|--------|------|------|------|---------|-------------|
| **NVIDIA** | Cosmos 3 | Mixture-of-Transformers | 16B (Nano) / 64B (Super) | 200M 精选视频片段 | 世界生成、动作生成、物理AI推理 |
| **Google DeepMind** | Genie 3 | 交互式世界生成模型 | 未公开 | 大规模视频数据 | 交互式3D世界生成，具身Agent训练 |
| **Google DeepMind** | DreamerV2 | 离散世界模型 | 未公开 | Atari 游戏 | 基于世界模型的 RL，master-level Atari |
| **Tencent Robotics X** | HY-Embodied-0.5 | Mixture-of-Transformers | 2B (边缘) / 32B (推理) | 未公开 | 具身基础模型，开放源代码 |
| **Open GigaAI** | GigaWorld-0 | 视频+3D 世界模型 | 未公开 | 未公开 | 作为 VLA 学习的数据引擎 |
| **AgiBot** | tau0-World Model | 统一视频-动作世界模型 | 未公开 | 未公开 | 操作任务 |
| **Huawei** | PSG-JEPA | JEPA 物理基元世界模型 | 未公开 | 未公开 | 物理基元世界模型 |
| **comma.ai** | 驾驶世界模型 | 端到端世界模型 | 未公开 | 驾驶数据 | 自动驾驶世界模型 |

**世界模型训练负载特征**：
- 视频数据密集型（不同于 LLM 的文本数据）
- 需要物理约束和因果关系的建模（不同于 LLM 的统计模式匹配）
- 多模态（视觉 + 动作 + 物理状态），需要异构计算
- 训练需要大规模并行仿真（如 MuJoCo 的 GPU 加速后端）
- 不同架构选择（Transformer、MoE、JEPA、SSM）对硬件需求差异大

### 4.2 VLA 模型（Vision-Language-Action Models）

VLA 模型是物理AI中连接感知、语言和动作的核心模型类型。其训练需要融合视觉编码器、语言模型和动作解码器，产生独特的计算负载特征。

| 研究方 | 模型 | 参数规模 | 关键特性 | 训练数据 |
|--------|------|---------|---------|---------|
| **NVIDIA** | GR00T 1.7 | 3B | 人形机器人 VLA，端到端策略开发 | 多模态机器人数据 |
| **Physical Intelligence** | π0 → π0.7 | 未公开 | 零样本跨形态任务执行，通用策略 | 多机器人多任务数据 |
| **Figure AI** | Helix 01/02 | 未公开 | 全身功能自主，动捕 + 仿真数据 | 动捕 + 仿真数据 |
| **Tencent** | HY-Embodied-0.5 | 2B/32B | 边缘 + 推理双模型，MoT 架构 | 未公开 |
| **AMAP (AutoNavi)** | ABot-M0 | 未公开 | 动作流形学习，动作在低维光滑流形上 | UniACT 数据集 6M+ 轨迹 |
| **SJTU** | UniviewVLA | 未公开 | 统一 VLA 操作 | 未公开 |
| **Fudan** | CoWVLA | 未公开 | 世界模型链 + VLA 策略 | 未公开 |
| **HKUST (GZ)** | World-VLA-Loop | 未公开 | 世界模型 + VLA 闭环 | 未公开 |
| **SYSU (HCP Lab)** | VGA (Vision-Geometry-Action) | 未公开 | 视觉-几何映射，取代语言 backbone | 3D 表示预训练 |
| **EO-Robotics** | EO-1 | 未公开 | 交错视觉-文本-动作预训练 | EO-Data1.5M 数据集 |
| **Tsinghua** | ACE-Brain-0 | 未公开 | 空间智能作为共享骨架 | 未公开 |

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

### 4.4 关键学术观点

| 来源 | 观点 | 对我们的启示 |
|------|------|-------------|
| **Stanford (Mac Schwager 等)** | 机器人需要的不只是 VLA 和世界模型 | 物理AI训练的完整需求可能超出当前主流架构 |
| **TU Darmstadt + ETH Zurich (Jan Peters, Marco Hutter 等)** | 瓶颈在于将非结构化行为数据转化为有监督的机器人训练数据 | 数据转换和标注的计算需求值得关注 |
| **Peking University (HumanNet)** | 第一人称人类视频是机器人数据可扩展的低成本替代 | 人类视频数据处理的训练负载可能成为一大类 |
| **Stanford (Sherry Yang)** | 世界模型是 Agent 和真实世界之间的中介 | 世界模型训练推理的硬件需求值得深入研究 |
| **Nanjing University** | 物理仿真器和世界模型的具身智能综述 | 建议持续跟踪该综述的 GitHub 仓库以保持负载认知更新 |

---

## 五、学术研究：物理AI训练负载特征分析

### 5.1 训练负载类型分类

基于对以上研究机构和公司的综合分析，物理AI训练负载可分为以下五种核心类型：

| 负载类型 | 描述 | 计算密集点 | 内存/带宽需求 | 参数量级 | 代表方案 |
|----------|------|-----------|-------------|---------|---------|
| **仿真数据生成** | 通过物理仿真引擎生成合成训练数据 | 物理引擎计算（碰撞检测、刚体动力学、流体模拟）；大规模并行环境 | 中 | N/A（仿真参数） | Isaac Sim, MuJoCo, Gazebo, Cosmos |
| **世界模型训练** | 预测物理世界状态变化的自监督/生成式模型 | 视频处理 Transformer；MoE 路由；注意力机制 | 极高（视频序列HBM） | 2B-64B | Cosmos, Genie, DreamerV2 |
| **VLA 模型训练** | 视觉-语言-动作联合基础模型训练 | 视觉编码器 + LLM + 动作解码器联合训练 | 极高（多模态数据） | 1B-30B+ | GR00T, π0, Helix |
| **RL 策略优化** | 基于环境反馈的策略迭代优化 | 策略推理 + 价值估计 + 环境交互循环 | 低-中（状态/动作空间） | 相对小 | Isaac Lab, MuJoCo RL |
| **数据预处理与标注** | 机器人操作数据采集、标注、验证 | 视频处理、多模态标注、传感器融合 | 中 | N/A | Scale AI Data Engine |

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

全球物理AI训练研究呈现明显的"中美双极"格局：

**美国**：
- Stanford University（VLA、世界模型、sim-to-real）
- MIT CSAIL（世界模型 RL）
- UC Berkeley（sim-to-real 基础研究）
- CMU Robotics Institute（人类视频结构化世界模型）
- 企业：NVIDIA、Google DeepMind、Physical Intelligence、Skild AI

**中国**：
- 清华大学（ACE-Brain-0 通用基础模型、KeyWorld VLA 规划）
- 北京大学（HumanNet 百万小时人类视频、NavFoM 导航基础模型、ReVidgen 视频生成基准）
- 上海交通大学（UniviewVLA 操作模型）
- 复旦大学（CoWVLA 世界模型链 VLA）
- 中山大学 HCP Lab（VGA 视觉-几何-动作模型）
- 香港科技大学（广州）（World-VLA-Loop 闭环）
- 南京大学（具身智能综述）
- 企业：Tencent Robotics X、AgiBot、Open GigaAI、EO-Robotics、Robbyant Technology

**其他**：
- ETH Zurich（四旋翼世界模型、四足机器人 RL）
- University of Oxford（TWIST 世界模型蒸馏）
- TU Darmstadt（VLA/世界模型局限性）
- KAIST（Sparse Imagination 高效世界模型）
- TU Delft（解析世界模型，物理+学习混合）
- DLR（Agile Justin 人形机器人）

---

## 六、关键空白与机会

### 6.1 芯片层空白

| 空白领域 | 描述 | 竞争情况 | 机会评估 |
|----------|------|---------|---------|
| **物理AI训练专用加速器** | 目前无任何芯片公司针对物理AI训练负载（世界模型/VLA/RL/仿真）做专用加速 | NVIDIA 通用 GPU 垄断，但并非物理AI专用 | 高——这是最大空白，但需要精确定义负载特征 |
| **仿真加速芯片** | 物理仿真（碰撞检测、刚体动力学、流体模拟）目前完全在 CPU/GPU 上运行 | 无专用加速器 | 中——市场有限，但如有物理AI训练集群可整合 |
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
| **中小型机器人公司训练解决方案** | 针对买不起 DGX 集群的中小机器人公司的训练方案 | 高——市场大但分散 |
| **物理AI训练芯片 IP 许可** | 针对物理AI训练的芯片 IP 可授权给其他公司 | 中——Tenstorrent 模式可参考 |

---

## 七、对我们的参考意义

### 7.1 物理AI训练芯片孵化方向的核心定位

基于以上分析，训练芯片孵化应考虑以下定位选项：

**选项 A：物理AI训练专用加速器（推荐）**
- 聚焦特定物理AI负载（建议：VLA 模型训练 + 世界模型推理）
- 差异化 vs NVIDIA：在特定负载上实现 2-10x 性价比优势
- 风险：NVIDIA 下一代产品可能缩小差距
- 需要：精确的物理AI训练负载分析 + 与模型公司合作定义规格

**选项 B：物理AI训练 + 仿真一体化芯片**
- 整合训练加速和物理仿真加速
- 差异化：减少训练过程中 CPU/GPU 间数据传输
- 风险：芯片面积和复杂度大
- 需要：深刻理解物理引擎的加速需求

**选项 C：物理AI训练数据管道芯片**
- 聚焦视频数据预处理、多模态数据编码、标注加速
- 差异化：训练链路中的"暗数据"处理
- 风险：市场容量有限
- 需要：与数据管道公司（如 Scale AI）合作

### 7.2 关键架构考虑的启示

基于 Dojo、Cosmos、GR00T 等方案的分析：

1. **视频处理是核心**：物理AI训练中最消耗计算的是视频数据，而非文本。芯片架构应针对视频序列处理优化（长序列注意力、视频编解码、光流/运动估计）。

2. **低精度训练是实现性价比的关键路径**：Dojo 的 CFloat8/CFloat16、Cosmos 的 FP8 训练表明，物理AI训练可以接受更低精度。在物理AI训练中定制精度格式可能是差异化优势。

3. **内存层次设计需要重新思考**：物理AI训练的内存访问模式（视频流式 + 仿真随机访问）与传统 LLM 训练不同，可能需要更大的 SRAM 或更宽的 HBM 接口。

4. **仿真与训练的计算融合**：物理AI训练中仿真和训练需要频繁交互，芯片层面支持仿真计算和神经网络计算的融合可能减少通信开销。

5. **分布式训练模式不同**：物理AI训练需要额外的"环境并行"维度，芯片的互联架构需要支持不同于传统 LLM 训练的通信模式。

### 7.3 合作伙伴与生态建设优先级

| 优先级 | 合作伙伴类型 | 具体方向 | 原因 |
|--------|-------------|---------|------|
| 最高 | 模型公司 | Physical Intelligence、Figure AI、Skild AI | 定义训练负载需求，提供验证场景 |
| 高 | 开源社区 | Hugging Face LeRobot、开源世界模型 | 降低软件栈构建成本，建立生态 |
| 高 | 研究机构 | Stanford、清华、北大 | 获取前沿负载认知，吸引人才 |
| 中 | 数据公司 | Scale AI | 理解数据管道计算需求 |
| 中 | 仿真平台 | 开源仿真引擎 | 整合仿真加速能力 |
| 低 | 其他芯片公司 | 可能存在合作以构建完整方案 | 早期阶段聚焦自身 |

### 7.4 时间窗口判断

| 维度 | 时间窗口 | 判断依据 |
|------|---------|---------|
| 物理AI训练芯片市场 | 2-3 年（2026-2029） | 物理AI仍处于早期阶段，训练需求尚未定型 |
| NVIDIA 物理AI壁垒强化 | 持续加速 | 从 Cosmos 到 GR00T 到 Isaac，NVIDIA 正在快速建立物理AI软件栈 |
| 国产替代窗口 | 1-2 年 | 制裁环境下国产替代需求迫切，但客户对芯片性能要求也在提高 |
| 开源生态成熟 | 1-2 年 | LeRobot、MuJoCo、开源世界模型正在快速成熟 |

**初步判断**：物理AI训练芯片孵化的时间窗口在 2-3 年内，但必须立即行动以：
1. 在 NVIDIA 物理AI软件栈完全锁定生态之前建立差异化定位
2. 在物理AI训练负载标准化之前参与定义
3. 在国产替代需求窗口期内完成产品定义和验证

---

## 八、信息来源

### 芯片公司
- https://developer.nvidia.com/blog/category/robotics/
- https://developer.nvidia.com/blog/develop-humanoid-robot-policies-end-to-end-with-nvidia-isaac-gr00t/
- https://developer.nvidia.com/blog/develop-physical-ai-reasoning-world-and-action-models-with-nvidia-cosmos-3/
- https://developer.nvidia.com/blog/beyond-vlas-how-world-action-models-reshape-robot-manipulation/
- https://en.wikipedia.org/wiki/Tesla_Dojo
- https://en.wikipedia.org/wiki/AMD_Instinct
- https://en.wikipedia.org/wiki/Habana_Labs
- https://en.wikipedia.org/wiki/Groq
- https://en.wikipedia.org/wiki/SambaNova_Systems
- https://en.wikipedia.org/wiki/Ambarella_Inc.

### AI Infra 与软件
- https://developer.nvidia.com/isaac/gr00t
- https://www.nvidia.com/en-us/ai/cosmos/
- https://www.pi.website/
- https://www.skild.ai/
- https://en.wikipedia.org/wiki/Figure_AI
- https://www.figure.ai/
- https://www.sanctuary.ai/
- https://scale.com/robotics
- https://en.wikipedia.org/wiki/Scale_AI
- https://github.com/huggingface/lerobot
- https://www.intrinsic.ai/
- https://www.openrobotics.org/
- https://mujoco.readthedocs.io/en/stable/overview.html
- https://github.com/google-deepmind/mujoco
- https://covariant.ai/
- https://www.agilityrobotics.com/
- https://en.wikipedia.org/wiki/Agility_Robotics

### 模型与研究
- https://deepmind.google/discover/blog/
- https://arxiv.org/abs/2303.01471
- https://www.nvidia.com/en-us/ai/physical-ai/
- https://arxiv.org/abs/2501.03575
- https://www.physicalintelligence.company/
- https://github.com/Tencent-Hunyuan/HY-Embodied
- https://arxiv.org/abs/1710.06537
- https://giga-world-0.github.io/
- https://finch.agibot.com/research/tau0-wm
- https://arxiv.org/search/?query=EO-Robotics
- https://arxiv.org/search/?query=Robbyant+Technology
- https://arxiv.org/search/?query=comma.ai+world+model
- https://arxiv.org/search/?query=PSG-JEPA
- https://arxiv.org/search/?query=ABot-M0
- https://arxiv.org/search/?query=Stanford+world+model+robotics
- https://arxiv.org/search/?query=MIT+world+model+RL
- https://arxiv.org/search/?query=UC+Berkeley+robot+learning
- https://www.ri.cmu.edu/
- https://arxiv.org/search/?query=ETH+Zurich+world+model
- https://arxiv.org/search/?query=Tsinghua+ACE-Brain
- https://arxiv.org/search/?query=Peking+University+embodied
- https://arxiv.org/search/?query=UniviewVLA
- https://arxiv.org/search/?query=CoWVLA
- https://arxiv.org/search/?query=TWIST+world+model+Oxford
- https://arxiv.org/search/?query=TU+Darmstadt+VLA+world+model
- https://arxiv.org/search/?query=VGA+model+SYSU
- https://arxiv.org/search/?query=World-VLA-Loop
- https://arxiv.org/search/?query=BIGAI+embodied
- https://arxiv.org/search/?query=Nanjing+University+embodied+intelligence
- https://arxiv.org/search/?query=KAIST+sparse+imagination
- https://arxiv.org/abs/2010.02193
- https://arxiv.org/search/?query=ReCoRe+world+model
- https://arxiv.org/search/?query=DLR+Agile+Justin
- https://arxiv.org/search/?query=TU+Delft+analytic+world+model
- https://arxiv.org/search/?query=NTU+world+model+edge