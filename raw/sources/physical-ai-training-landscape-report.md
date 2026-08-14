# 物理AI训练负载：产业链认知与行动全景图

> 本报告基于 2026-08-14 的联网搜索结果，系统梳理芯片、AI Infra、模型和学术研究领域对物理AI（Physical AI）训练负载的认知和行动。旨在为训练芯片孵化方向提供竞争参照和空白识别。
> Updated: 2026-08-14

## 一、核心发现摘要

1. **NVIDIA 已构建物理AI训练的全栈垄断**：从GPU（Blackwell B300）到仿真（Isaac Sim/Omniverse）、世界模型（Cosmos 3）、人形机器人基础模型（GR00T 1.7）再到边缘部署（Jetson Thor），NVIDIA 在训练芯片、模拟环境、数据生成、模型训练和部署的每个环节都有产品，且以开放许可证（OpenMDW1.1）和开源工具（Isaac Lab）形成生态锁定。

2. **物理AI训练负载与传统LLM训练负载存在根本性差异**：物理AI训练需要同时处理（1）大规模多模态视频数据（200M+视频片段），（2）仿真环境中的RL/模仿学习迭代，（3）世界模型的因果推理和动作生成，（4）sim-to-real 迁移验证。这产生了对高带宽内存、低延迟互联、FP8/BF16混合精度和长时间仿真-训练-验证循环的独特需求，并非通用GPU训练集群的简单扩展。

3. **世界模型正在成为物理AI训练的核心基础设施**：Cosmos 3（NVIDIA）、Genie 3（DeepMind）、GigaWorld-0（Open GigaAI）、tau0-WM（AgiBot）等世界模型被定位为"无限合成数据引擎"和"物理推理基础"，将物理AI的训练从"收集真实数据→训练策略"转变为"世界模型生成数据→训练策略→世界模型验证→real-world部署"的新范式。

4. **训练数据瓶颈的解决方案正在分化**：Scale AI 的 Physical AI Data Engine 采用大规模人工收集+标注方案（数千采集器、数据工厂）；Peking University 的 HumanNet 论证了人类视角视频可作为机器人数据的可扩展替代品；Cosmos 3 和 GigaWorld 走世界模型生成合成数据路线；Physical Intelligence 和 Skild AI 则走多机器人多任务数据收集+RL路线。这种分化意味着训练芯片的优化目标尚未收敛。

5. **芯片层面，物理AI训练的专用加速器市场几乎空白**：除NVIDIA和Tesla（Dojo）外，所有主要芯片公司（AMD、Intel、Groq、SambaNova、Tenstorrent）均未针对物理AI训练负载做任何明确的优化、基准测试或软件栈适配。这为训练芯片孵化方向留下了明确的差异化窗口，但窗口期取决于物理AI训练负载的收敛速度。

## 二、芯片公司：物理AI训练硬件布局

### 2.1 海外巨头

#### NVIDIA
- **背景**：全球AI芯片霸主，市值>2万亿美元，在物理AI训练领域同时扮演芯片供应商、仿真平台运营商、基础模型开发商和生态系统标准制定者。
- **相关产品**：
  - Blackwell B200/B300 GPU + DGX 系统：物理AI基础模型训练主力硬件
  - Isaac GR00T 平台：开源人形机器人开发平台，含 GR00T 1.7 VLA 模型（3B参数）
  - Cosmos 3 世界基础模型：16B Nano / 64B Super 变体，Mixture-of-Transformers 架构，用于物理AI推理、世界生成和动作生成，提供开放后训练配方（SFT + action-oriented training）
  - Isaac Sim（Omniverse）：物理仿真和合成数据生成
  - Jetson Thor/T2000/T3000：边缘AI计算机，用于已训练策略的机器人端部署
  - Halos：全栈功能安全系统
  - World Action Models (WAMs)：作为VLA替代方案的研究
  - Isaac Lab-Arena、Isaac Teleop、Isaac ROS、Nemotron、Alpamayo 后训练系统
- **物理AI战略**：NVIDIA CEO Jensen Huang 明确将 Physical AI 定义为"下一个大事件"，构建"三台计算机"战略——DGX系统（训练AI基础模型）、Omniverse/Isaac Sim（仿真和合成数据生成）、Jetson（边缘部署）。GR00T-N1.5 在千卡GPU分布式训练上实现了40倍加速。
- **对我们方向的启示**：NVIDIA 已覆盖所有层面，直接竞争不现实。差异化机会在于：（1）NVIDIA 的物理AI训练栈高度依赖 CUDA 生态，对非NVIDIA训练芯片的适配成本极高；（2）Cosmos 3 的开放后训练配方和 GR00T 开源平台实际上为竞争对手提供了兼容性目标；（3）大客户（如Tesla、Figure AI）的定制化训练需求可能超越 NVIDIA 的通用方案。

#### AMD
- **背景**：全球第二大GPU供应商，市值>2000亿美元。
- **相关产品**：Instinct MI300X（304 Compute Units、192GB HBM3、5.3TB/s带宽、1307 TFLOPS FP16）、MI325X、MI350 系列，ROCm 软件栈。
- **物理AI相关性**：**间接相关**。AMD Instinct GPU 理论上可以运行机器人模型训练负载，但 AMD 没有任何针对物理AI、VLA模型训练或世界模型训练的具体优化声明。缺乏对标 NVIDIA Isaac/Cosmos 生态的机器人专用软件栈，ROCm 在 AI 领域的生态成熟度仍显著低于 CUDA。
- **对我们方向的启示**：AMD 在物理AI训练领域的缺位是显著的。如果训练芯片从 ROCm 入手做物理AI优化，可能借助 AMD 的开源倾向建立差异化生态，但需要承担 ROCm 生态不成熟的风险。

#### Intel
- **背景**：传统芯片巨头，市值约1000亿美元。
- **相关产品**：Gaudi 3 AI 加速器（来自 Habana Labs）、Data Center GPU Max 系列（Ponte Vecchio）、RealSense（已剥离）。
- **物理AI相关性**：**间接相关**。Gaudi 3 是通用AI加速器，理论上可训练机器人模型，但 Intel 没有任何针对物理AI的声明或优化。缺乏机器人专用框架或仿真生态。RealSense（曾是 Intel 主要的机器人资产）已被剥离。
- **融资状态**：上市公司（NASDAQ: INTC），面临代工转型压力。
- **对我们方向的启示**：Intel 的 AI 战略重心在通用训练/推理加速器和代工服务，短期内不会专门针对物理AI训练负载优化。其代工服务（Intel 18A）可能为训练芯片提供制造选项。

#### Google (TPU)
- **背景**：Alphabet 旗下，TPU 是 Google Cloud 的核心 AI 训练加速器。
- **物理AI相关性**：**高度相关但通过 DeepMind 间接体现**。Google DeepMind 在物理AI基础模型方面投入巨大（Gemini Robotics、Genie 3、SIMA 2），但这些模型很可能在 TPU 上训练。然而 Google 从不公开 TPU 的物理AI训练性能数据，也不对外提供 TPU 作为物理AI训练芯片的参考设计。
- **对我们方向的启示**：Google 的策略是"垂直整合"——自研芯片、自训练模型、自用部署。对于第三方训练芯片公司，Google 不是一个可触及的客户，但 DeepMind 在物理AI训练负载方面的研究（DreamerV2、world model scaling laws）是理解训练需求的重要参考。

#### Amazon (Trainium/Inferentia)
- **背景**：AWS 自研 AI 芯片，Trainium 面向训练，Inferentia 面向推理。
- **物理AI相关性**：**间接相关**。Trainium 2 主要用于 AWS 内部和云客户的通用 AI 训练，没有针对物理AI训练的明确声明。Amazon 通过投资 Figure AI、Agility Robotics 和 Scale AI 间接参与物理AI生态，但并未在训练芯片层面做专门适配。
- **对我们方向的启示**：Amazon 有明确的物理AI战略（通过投资），但训练芯片路线图仍聚焦通用 AI 训练。如果物理AI训练成为 AWS 客户的重要需求，Trainium 3 可能增加物理AI相关优化。

### 2.2 国内头部

> 注：本次搜索结果未覆盖国内芯片公司（华为昇腾/寒武纪/摩尔线程/壁仞/沐曦/燧原）在物理AI训练方面的具体信息。以下基于公开资料做简要整理。

#### 华为（昇腾 Ascend）
- **背景**：华为昇腾系列 AI 处理器，搭载达芬奇架构（Da Vinci），支持训练和推理。昇腾 910B/910C 是目前的主力训练芯片。
- **物理AI相关性**：**间接相关**。华为在机器人领域有布局（华为云机器人平台、盘古大模型在工业领域的应用），但昇腾芯片是否针对物理AI训练负载做优化无公开信息。华为的物理AI生态主要围绕自主可控和国产替代展开。
- **对我们方向的启示**：国内机器人公司的训练芯片国产化需求是明确的。如果华为昇腾没有专门针对物理AI训练优化，这是国产替代窗口。

#### 寒武纪（Cambricon）
- **背景**：国产 AI 芯片公司，思元系列 AI 加速器。
- **物理AI相关性**：**未确认**。寒武纪在智能驾驶、机器人视觉方面有布局，但无公开的物理AI训练专项优化。
- **融资状态**：科创板上市公司。

#### 摩尔线程（Moore Threads）
- **背景**：国产 GPU 创业公司，兼容 CUDA，主打图形渲染和 AI 计算。
- **物理AI相关性**：**未确认**。无公开的物理AI训练专项优化。

#### 壁仞科技（Biren Technology）
- **背景**：国产 GPU 创业公司，BR100/BR104 通用 GPU。
- **物理AI相关性**：**未确认**。无公开的物理AI训练专项优化。

#### 燧原科技（Enflame Technology）
- **背景**：国产 AI 训练/推理芯片公司，云燧系列。
- **物理AI相关性**：**未确认**。无公开的物理AI训练专项优化。

### 2.3 海外初创

#### Tesla (Dojo)
- **背景**：Tesla 自研超算系列，D1 芯片为 7nm 定制 ASIC（500亿晶体管、645mm²、354核/片、440MB SRAM、376 TFLOPS BF16/CFloat8），ExaPOD 目标 1 exaflop。2025年8月传解散，2026年1月重启为 Dojo3，描述为"首个完全自研硬件（无NVIDIA依赖）的 Tesla 超算"。
- **物理AI相关性**：**高度相关**。Dojo 专为视频数据神经网络训练设计，与 Optimus 人形机器人训练需求高度契合（共享计算机视觉和视频处理需求）。Dojo 采用激进的无一致性、无虚拟内存、快速分布式 SRAM、自定义 CFloat8/CFloat16 格式设计，专门针对"视频数据→神经网络训练"这一特定负载优化。
- **对我们方向的启示**：Dojo 的架构选择（无一致性、无虚拟内存、自定义精度格式）代表了"为特定训练负载定制芯片"的极端案例。这验证了物理AI训练场景下专用芯片设计的合理性，但 Dojo 的高昂成本和多次重启也警示了专用芯片的风险。

#### Cerebras
- **背景**：设计 WSE-3（晶圆级引擎），5nm 工艺，4万亿晶体管，90万 AI 核心，44GB SRAM 片上内存。
- **物理AI相关性**：**未确认**。Cerebras 主要定位为通用 AI 训练加速器，其巨大的片上内存对某些物理AI训练场景（如大规模仿真数据生成）可能有益，但无公开声明。

#### Graphcore
- **背景**：设计 IPU（Intelligence Processing Unit），独特的 MIMD 架构，大规模并行处理。
- **物理AI相关性**：**未确认**。Graphcore 已退出中国市场，全球影响力下降。无公开的物理AI训练优化。

#### Tenstorrent
- **背景**：由 Jim Keller（Apple、Tesla、AMD、Intel 传奇芯片架构师）创立，采用 RISC-V CPU + Tensix Core AI 加速器混合架构。产品线：Wormhole（推理/训练）、Blackhole（下一代）、Grendel（未来架构）。强调开源软件栈（TT-Metalium、TT-BUDA）。
- **物理AI相关性**：**间接相关**。Tenstorrent 的 AI 加速器支持通用训练负载，包括机器人领域涉及的深度学习模型类型。但其开源策略和 RISC-V 架构对寻求供应链多元化的机器人公司有潜在吸引力。无针对物理AI的专项声明。
- **融资状态**：独角兽（估值>10亿美元），获 Samsung、LG、Fidelity、Bezos Expeditions 等投资，已宣布 IPO 计划。
- **对我们方向的启示**：Tenstorrent 的开放策略值得关注——如果我们将训练芯片定位为"物理AI训练的开源替代方案"，Tenstorrent 的生态策略（开源软件栈、IP 授权）是重要参考。但 Tenstorrent 也没有针对物理AI训练负载做优化，大家站在同一起跑线。

#### Groq
- **背景**：设计 LPU（Language Processing Unit），确定性单核架构，无传统分支预测器和缓存，采用数据流架构。2025年12月，NVIDIA 以约200亿美元协议获得 Groq 推理技术授权。Groq 现转型为 AI 推理云（GroqCloud）。
- **物理AI相关性**：**有限**。LPU 是推理芯片，其架构针对 LLM 推理延迟优化，而非大规模物理AI模型训练。可能在机器人端推理部署中发挥作用，但无任何物理AI相关声明。
- **融资状态**：D轮6.4亿美元（2024年8月，估值28亿美元），沙特承诺15亿美元（2025年2月），2026年5月报道融资6.5亿美元。

#### SambaNova Systems
- **背景**：设计 RDU（Reconfigurable Dataflow Unit），SN40L 为当前处理器，可重构数据流架构。由 Stanford 教授 Kunle Olukotun 和 Christopher Re 创立。
- **物理AI相关性**：**有限**。RDU 是通用 AI 加速器，聚焦 LLM 推理。无物理AI相关声明或机器人专用优化。
- **融资状态**：累计融资约11亿美元，2021年4月估值51亿美元。2026年2月 Vista Equity Partners 和 Intel 领投新轮次。

#### Ambarella
- **背景**：纳斯达克上市公司（AMBA），专注于低功耗视频压缩、图像处理和计算机视觉处理器。CVflow SoC 架构用于机器人应用（最著名的是 DJI Phantom 无人机）。
- **物理AI相关性**：**周边相关**。CVflow SoC 用于机器人端设备上的计算机视觉和 AI 推理（无人机、机器人），是部署/推理芯片，而非训练加速器。物理AI训练负载方面不相关。
- **融资状态**：上市公司，2024财年营收约2.26亿美元，员工915人。

### 2.4 国内初创

> 本次搜索结果未覆盖国内芯片初创公司（如地平线、黑芝麻智能、希姆计算、墨芯等）在物理AI训练方面的信息。地平线在智能驾驶/机器人芯片方面有布局，但主要面向边缘推理而非训练。

## 三、AI Infra与软件公司：物理AI训练平台

### 3.1 仿真和数据生成平台

| 公司/产品 | 方向 | 核心能力 | 物理AI相关性 | 融资状态 |
|-----------|------|----------|-------------|---------|
| **NVIDIA Isaac Sim / Isaac Lab / GR00T / Cosmos** | 物理AI全栈训练平台 | 物理仿真（Isaac Sim）、RL/模仿学习框架（Isaac Lab）、人形机器人基础模型（GR00T 1.7）、世界模型合成数据生成（Cosmos 3，Mixture-of-Transformers，200M视频片段训练） | **核心**。为物理AI训练提供仿真环境、RL训练框架、合成数据生成和基础模型的全栈覆盖。Cosmos 3 的 Nano 变体（16B）可在工作站 GPU（RTX PRO 6000）上运行，Super 变体（64B）需集群。开源许可证 OpenMDW1.1。 | 上市公司（NVDA） |
| **Google DeepMind MuJoCo** | 开源物理引擎 | 多关节带接触动力学仿真，GPU加速后端（MJX/JAX、MuJoCo Warp/NVIDIA Warp），大规模并行采样 | **关键基础设施**。工业级物理引擎，支持大规模并行RL训练采样。MuJoCo 的 GPU 加速后端使机器人训练在仿真中可扩展到数千并行环境。 | Alphabet（公开上市） |
| **Open Robotics (ROS / Gazebo)** | 开源机器人仿真 | 物理引擎、高质量图形、编程接口，支持仿真-训练-测试全流程 | **基础仿真工具**。广泛用于研究和工业界的机器人仿真训练，是 ROS 生态的核心组件。 | 非营利/开源组织 |
| **Intrinsic (Google X 剥离)** | 工业自动化训练平台 | Intrinsic Flowstate 开发环境、感知训练（pose estimator 训练）、运动规划、sim-to-real 部署 | **工业级训练平台**。提供感知模型训练、运动规划、sim-to-real 部署的全流程平台。Intrinsic Vision Model 可用于机器人视觉训练。 | 原 Google X 孵化，无独立融资披露 |

### 3.2 机器人基础模型公司

| 公司 | 方向 | 核心产品 | 训练方法 | 融资状态 |
|------|------|---------|---------|---------|
| **Physical Intelligence (π)** | 通用机器人策略 | π0 → π0.5 → π0.6 → π0.7（通用VLA策略） | 多任务/多机器人数据收集 + RL + 高效在线RL（RL Token提取）+ 人类视频迁移 + 记忆系统 | Bond、Bezos、Khosla、Lux、OpenAI、Redpoint、Sequoia、CapitalG、Thrive 等投资 |
| **Skild AI** | 通用机器人大脑 | Skild Brain（拟身通用机器人策略） | 人类视频数据学习（可扩展训练数据方案），非仿真独占 | Felicis、General Catalyst、Sequoia、SoftBank、Menlo Ventures、CRV、Lightspeed、Coatue、Amazon、Bezos、SV Angel、CMU 等投资 |
| **Figure AI** | 人形机器人 | Figure 03（人形机器人）+ Helix（VLA模型，Helix 01/02） | 动作捕捉数据 + 仿真ML训练，拥有约740台部署机器人（2026年中）产生真实世界训练数据 | 2023年5月 $70M；2024年2月 $675M B轮（Bezos、Microsoft、NVIDIA、Intel、Amazon、OpenAI，估值$26亿）；2025年9月 >$1B C轮（Brookfield、Qualcomm、Salesforce、T-Mobile，估值$390亿） |
| **Sanctuary AI** | 工业自动化物理AI | Phoenix 人形机器人（第8代）+ 液压手 + 触觉传感器 | 使用 Isaac Lab 做灵巧操作 sim-to-real 迁移，工业任务成功率>99.5% | Zeon 战略投资 |

### 3.3 训练数据基础设施

| 公司 | 方向 | 核心能力 | 物理AI相关性 | 融资状态 |
|------|------|---------|-------------|---------|
| **Scale AI (Physical AI Data Engine)** | 物理AI数据基础设施 | 全栈数据收集/标注/验证：全球数据工厂网络、分布式采集器（真实世界演示数据）、双臂遥操作、机器人无人体感数据采集（Scale Harness）、多模态标注+人类专家反馈 | **直接解决物理AI数据瓶颈**。Scale AI 的 Physical AI Data Engine 是市面上最系统的物理AI训练数据平台。SOC 2 Type II 和 ISO 27001 认证。 | 独角兽（2019年8月），2024年3月~$130亿估值，2024年5月融资$10亿（Amazon、Meta，估值$140亿），2025年6月 Meta 收购49%非投票权股份约$148亿 |
| **Hugging Face (LeRobot)** | 开源机器人AI库 | 统一硬件接口、标准化 LeRobotDataset 格式（Parquet+MP4）、SOTA 策略模型（ACT、Diffusion、VQ-BeT、HIL-SERL、TDMPC、Pi0、GR00T N1.7、SmolVLA、VLA-JEPA、LingBot-VA、FastWAM、SARM、TOPReward、Robometer）、单CLI命令训练/评估流水线 | **开源训练基础设施**。LeRobot 是物理AI训练的开源基准平台，26,600+ GitHub stars，Apache 2.0 许可。标准化了物理AI训练的数据集格式和评估流程，降低了入门门槛。 | Hugging Face $45亿+（2023年D轮），LeRobot 为开源项目 |

### 3.4 机器人公司

| 公司 | 方向 | 核心产品 | 训练方法 | 融资状态 |
|------|------|---------|---------|---------|
| **Agility Robotics** | 商用双足机器人 | Digit 人形机器人 + Arc 云平台 | 真实仓库部署数据回传用于训练，RoboFab 工厂（2023年投产），首个 RaaS 合同（GXO Logistics, 2024） | 通过 SPAC 与 Churchill Capital Corp XI 合并上市 |
| **Covariant** | 仓库机器人AI | Covariant Brain（机器人AI平台） | 此前为仓库机器人操作提供 RL + 模仿学习 + 云端训练基础设施 | 此前获重大融资，当前网站仅显示logo和版权信息，状态不明 |

## 四、模型与算法公司：物理AI训练需求定义

### 4.1 世界模型（World Foundation Models）

世界模型正在成为物理AI训练的核心基础设施，其训练负载特征对芯片设计有直接影响。

| 模型 | 开发者 | 规模 | 架构 | 训练数据 | 训练负载特征 |
|------|-------|------|------|---------|-------------|
| **Cosmos 3** | NVIDIA | 16B (Nano) / 64B (Super) | Mixture-of-Transformers | 200M 精选视频片段 | 视频数据训练，MoT 架构，支持 Text2World/Image2World/Video2World 生成 |
| **Cosmos-Predict2.5 / Cosmos-Transfer2.5** | NVIDIA | 2B / 14B | 扩散模型 | 200M 视频片段 | 开源模型，NVIDIA Open Model License |
| **Genie 3** | Google DeepMind | 未公开 | 视频生成 | 大规模视频数据 | 交互式3D世界生成，用于具身智能体训练 |
| **GigaWorld-0** | Open GigaAI | 未公开 | 视频+3D世界模型 | 未公开 | 作为VLA学习的数据引擎，配合 FP8/sparse attention 高效训练 |
| **tau0-World Model** | AgiBot | 未公开 | 统一视频-动作世界模型 | 未公开 | 操作任务统一视频和动作模态 |
| **PSG-JEPA** | 华为 | 未公开 | JEPA (Joint Embedding Predictive Architecture) | 未公开 | 物理接地世界模型，JEPA 架构 |

**关键洞察**：世界模型训练负载的核心特征是**大规模视频数据处理**。Cosmos 3 在 200M 视频片段上训练，意味着训练芯片需要处理极大量的视频数据 I/O 和视频编解码加速。MoE/MoT 架构的引入意味着稀疏激活模式，对内存带宽和互联的要求不同于传统稠密Transformer。

### 4.2 VLA 模型（Vision-Language-Action Models）

VLA 模型是当前物理AI训练的主流策略范式，直接连接视觉感知、语言理解和动作生成。

| 模型 | 开发者 | 规模 | 特点 | 训练需求 |
|------|-------|------|------|---------|
| **GR00T 1.7** | NVIDIA | 3B | 开源人形机器人VLA模型 | 分布式训练（千卡40倍加速报告） |
| **π0 → π0.7** | Physical Intelligence | 未公开 | 零样本跨体通用操作，连续7代迭代 | 多任务/多机器人数据 + RL + 人类视频迁移 |
| **Helix 01/02** | Figure AI | 未公开 | 全身自主VLA，Helix 02 扩展至全身 | 动作捕捉数据 + 仿真ML |
| **Gemini Robotics** | Google DeepMind | 未公开 | 感知、推理、工具使用、全身智能 | 多模态训练，Gemini 大模型基础 |
| **HY-Embodied-0.5** | 腾讯 | 2B (边缘) / 32B (推理) | Mixture-of-Transformers，开源 | 2B 边缘模型在机器人端部署，32B 推理模型需大规模训练集群 |
| **ACE-Brain-0** | 清华大学 | 未公开 | 通用基础大脑，统一空间推理+自动驾驶+具身操作 | 空间智能作为共享支架 |
| **ABot-M0** | 高德/阿里巴巴 | 未公开 | Action Manifold Learning，动作在低维平滑流形上 | UniACT-dataset 含 6M+ 轨迹 |
| **EO-1** | EO-Robotics | 未公开 | 交错视觉-文本-动作预训练 | EO-Data1.5M 数据集 |
| **UniviewVLA** | 上海交通大学 | 未公开 | 统一VLA操作 | 操作场景训练数据 |
| **CoWVLA** | 复旦大学 | 未公开 | Chain of World + VLA 集成 | 世界模型链与VLA策略结合 |

**关键洞察**：VLA 模型训练负载的特点包括（1）多模态数据融合（视觉、语言、动作），（2）RL 训练循环中仿真-训练-策略评估的迭代，（3）从 2B（边缘部署）到 32B（推理模型）的参数量跨度。GR00T-N1.5 的"千卡 GPU 40倍加速"暗示了分布式训练在物理AI场景中的重要性。

### 4.3 关键学术观点

> **"Robots Need More than VLA and World Models"** — 来自 Stanford (Mac Schwager)、ETH Zurich (Marco Hutter)、TU Darmstadt (Jan Peters) 的联合立场论文，认为瓶颈不是模型架构，而是"将非结构化行为数据转化为接地机器人监督"。

> **VGA 模型** — 中山大学 HCP 实验室提出机器人的操作本质是"视觉到几何的映射"，用预训练3D表示替代语言骨干，在 ACM Multimedia 2026 发表。这一观点对训练芯片的启示：如果物理AI训练的核心是3D几何处理而非语言模型，那么训练芯片的加速单元应更关注3D/空间计算而非Transformer。

> **HumanNet** — 北京大学论证了自我中心人类视频是可扩展、成本效益高的机器人数据替代品，创建了 100 万小时人类视频语料库。这支持了"物理AI训练芯片应优先优化视频处理流水线"的观点。

## 五、学术研究：物理AI训练负载特征分析

### 5.1 全球研究分布

物理AI训练相关研究在全球范围内高度活跃，主要研究中心分布：

| 地区 | 主要机构 | 研究方向 | 研究强度 |
|------|---------|---------|---------|
| **美国** | Stanford、MIT、UC Berkeley、CMU、UT Austin | VLA、世界模型、sim-to-real、RL | 极高。核心研究团队多 |
| **中国** | 清华、北大、上海交大、复旦、中山大学、南大、中科院、BIGAI | 具身基础模型、世界模型、导航模型、VLA | 极高。研究面广，开源项目多 |
| **欧洲** | Oxford、Cambridge、ETH Zurich、TU Darmstadt、TU Delft、DLR | 世界模型蒸馏、模型基RL、人形机器人控制 | 高。偏重理论和方法 |
| **韩国** | KAIST | 高效世界模型（Sparse Imagination） | 中等 |
| **新加坡** | NTU、NUS | 边缘世界模型、Agentic AI | 中等 |

### 5.2 训练负载特征总结

基于对上述研究趋势的分析，物理AI训练负载的主要特征包括：

1. **视频数据密集型**：训练数据以大规模视频片段为主（200M片段、6M轨迹、100万小时），视频编解码、帧提取、数据增强构成训练流水线的 I/O 瓶颈。训练芯片需要高效的视频处理硬件加速单元。

2. **多模态融合**：视觉、语言、动作、3D几何、触觉等多模态数据需要同时处理，训练芯片的内存架构和互联带宽需要支持多模态数据的并行加载。

3. **仿真-训练-验证循环**：RL 训练涉及仿真环境中的大量并行采样（MuJoCo 的 GPU 加速后端支持数千并行环境），训练芯片需要同时处理仿真计算和模型训练，这可能意味着需要异构计算架构（仿真引擎 + 训练加速器）。

4. **稀疏激活模式**：MoE/MoT 架构引入稀疏激活，只有部分参数参与前向/反向传播，对内存带宽和动态路由计算有特殊要求。

5. **精度需求分化**：世界模型训练可能需要 FP32/FP16/BF16 混合精度，RL 训练可能容忍更低精度（CFloat8/FP8），但动作生成可能需要更高精度。Tesla Dojo 的 CFloat8/CFloat16 自定义格式是这一方向的极端案例。

6. **长时间持续训练**：物理AI模型训练可能涉及数天到数周的训练循环，训练芯片的可靠性、稳定性和长时间运行下的散热设计至关重要。

## 六、关键空白与机会

### 6.1 芯片层面空白

| 空白领域 | 描述 | 潜在机会 | 风险 |
|---------|------|---------|------|
| **物理AI训练专用加速器** | 除 NVIDIA 和 Tesla Dojo 外，无任何芯片公司针对物理AI训练负载做优化。所有加速器（AMD、Intel、Groq、Tenstorrent、Cerebras 等）都是通用AI训练芯片。 | 第一个明确定位物理AI训练的加速器，可能在视频处理、仿真加速、多模态融合方面获得差异化优势。 | 物理AI训练负载尚未收敛，优化方向可能被快速迭代的技术路线淘汰。 |
| **仿真-训练一体化加速器** | 当前物理AI训练需要仿真环境（Isaac Sim、MuJoCo）和训练硬件分开运行，仿真和训练之间的数据传输构成瓶颈。 | 芯片级集成仿真加速和训练加速，减少仿真-训练之间的数据搬运延迟。 | 仿真引擎的多样性（不同物理引擎、渲染引擎）使标准化困难。 |
| **视频处理加速单元** | 物理AI训练的核心瓶颈之一是视频数据流水线（编解码、帧提取、数据增强），通用 GPU 在这方面的效率低于专用硬件。 | 在训练芯片中集成视频编解码和视频预处理加速单元，作为差异化功能。 | 视频编解码标准（H.264/H.265/AV1）的物理AI训练适用性需要验证。 |
| **RL 训练加速** | 物理AI训练大量使用 RL（π0.7、Sanctuary AI 的99.5%+成功率训练），但 RL 训练的计算模式（大量并行环境采样、策略更新、值函数学习）与监督学习显著不同。 | 针对 RL 训练模式（特别是并行环境步进和策略更新的交替）优化芯片架构和通信模式。 | RL 训练在物理AI中的占比和重要性可能会随技术演进变化。 |

### 6.2 软件栈空白

| 空白领域 | 描述 | 潜在机会 |
|---------|------|---------|
| **物理AI训练基准和评测** | 现有 AI 训练芯片评测以 LLM 训练（MLPerf Training）为主，缺乏物理AI训练的标准基准。 | 建立物理AI训练负载的基准测试（VLA训练、世界模型训练、RL训练），为芯片设计提供明确优化目标。 |
| **开源物理AI训练栈** | NVIDIA 的 Isaac Lab/Cosmos 是事实上的标准，但绑定 CUDA 和 NVIDIA GPU。 | 构建非 NVIDIA 的物理AI训练软件栈，支持多后端（ROCm、OpenCL、自定义芯片 SDK）。 |
| **仿真-训练数据流水线** | 仿真数据生成和训练数据加载之间的高效流水线未被标准化。 | 开发仿真数据流式处理框架，直接连接仿真引擎和训练集群。 |

### 6.3 生态空白

| 空白领域 | 描述 | 潜在机会 |
|---------|------|---------|
| **国内机器人公司训练芯片需求** | 国内人形机器人公司（宇树、星动纪元、智元、傅利叶等）的训练芯片需求尚未被满足，多数依赖 NVIDIA GPU。 | 国内替代+物理AI优化的双轮驱动。 |
| **开源物理AI模型对训练硬件的适配** | LeRobot 等开源项目为多种策略模型提供了统一训练框架，但仅支持 NVIDIA GPU。 | 将训练芯片的 SDK 与 LeRobot 等开源框架集成，实现"即插即用"的物理AI训练。 |

## 七、对我们的参考意义

### 7.1 直接启示

1. **时机窗口明确**：物理AI训练负载尚未收敛，模型架构（VLA vs VGA vs WAM）和训练范式（真实数据 vs 合成数据 vs 仿真数据）仍在快速迭代。这意味着训练芯片的优化目标尚未固化，但也是最大的技术风险——优化方向可能在一年内被颠覆。

2. **NVIDIA 可渗透的环节**：NVIDIA 在物理AI训练领域最强的垄断力来自 CUDA 生态和 Isaac 平台，而不是硬件本身。如果训练芯片提供（1）与 LeRobot 等开源框架的原生集成，（2）与 Isaac Sim/Cosmos 的兼容层（通过 Codelet/OpenCL 而非 CUDA），（3）针对物理AI训练负载的专用加速单元，可能建立差异化优势。

3. **视频处理是核心**：无论 VLA、世界模型还是 VGA，物理AI训练的核心数据模态都是视频。训练芯片应优先优化视频数据的加载、解码、预处理和增强流水线，这可能是比 Transformer 加速更关键的差异化因素。

4. **RL 训练模式需重视**：物理AI训练中 RL 的比例远高于 LLM 训练。RL 训练的计算模式（大量并行环境+周期性策略更新）对芯片架构有独特要求，值得深入研究。

### 7.2 下一步建议

1. **建立物理AI训练负载基准**：收集 VLA 训练（π0、GR00T）、世界模型训练（Cosmos 3）、RL 训练（Isaac Lab）的 Profiling 数据，量化计算、内存、通信、I/O 的特征，为芯片架构决策提供数据基础。

2. **跟踪关键技术路线收敛**：密切跟踪（1）VLA 与 VGA 的竞争走向，（2）世界模型作为数据引擎的成熟度，（3）合成数据 vs 真实数据的训练效率对比。这三条路线的收敛方向将直接决定训练芯片的优化重点。

3. **评估国内机器人公司的训练需求**：对宇树、星动纪元、智元、傅利叶等国内人形机器人公司进行训练需求调研，了解其训练集群规模、GPU 使用情况、瓶颈点和迁移意愿，为一期芯片设计提供客户需求输入。

4. **关注国际开源生态**：持续跟踪 LeRobot、MuJoCo、Isaac Lab 等开源项目的发展，评估训练芯片 SDK 与这些框架的集成成本和技术可行性。

5. **研究仿真-训练一体化**：评估在训练芯片中集成轻量级物理仿真引擎（如 MuJoCo 的简化版）的技术可行性，实现仿真-训练-策略验证的"芯片闭环"。

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