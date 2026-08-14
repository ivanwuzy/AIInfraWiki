# Google（Google LLC）横纵分析报告

> Source: 本地文件 `横纵研究报告/Google_横纵分析报告.md`
> Collected: 2026-08-11
> Published: Unknown

# Google（Google LLC）横纵分析报告

> 研究截止日：2026-08-11｜研究对象：Google LLC（Alphabet Inc. 的全资运营子公司）｜对象类型：AI 基础设施平台公司｜清单初始分类：1.2 TPU（ASIC）

## 研究范围与结论先行

本报告研究的不是把 Google 当作一家“卖 TPU 的芯片创业公司”，而是研究它如何把自研 ASIC、网络、编译器、机器学习框架、模型、数据中心和云商业化串成一个闭环。Google LLC 的 TPU 并非可由客户采购、装入自有机房的标准加速卡；公开可验证的对外路径是 Google Cloud 上的托管 TPU 容量与围绕它的服务。因此，对人形机器人公司而言，Google 更像一个重要的训练/模型/云合作对象和技术路线基准，而不是可通过投资或收购取得控制权的标的。

**一句话定义：**Google LLC 是以 TPU 这一专用张量 ASIC 为硬件锚点、以 XLA/JAX/Pathways 等软件把大规模集群编程产品化、再由 Google Cloud 和 Gemini/DeepMind 负载反哺的垂直 AI 计算平台；它的真正护城河不在单颗芯片参数，而在“先有内部超级负载、再有系统软件、最后开放为云容量”的循环。[S1][S2][S8]

本轮成功标准是：①分开写清 TPU 已商业化能力、已发布但未普遍可用的能力和推断；②把 Google Cloud 的营收与 TPU 营收严格分开，后者并未被单独披露；③给出机器人公司在训练、推理、VLA 合作与供应安全上可执行的选择。结论是：**采购/合作优先于投资或并购；训练可纳入 GCP TPU 的基准测试和备选容量池，但生产机器人不应把云端 TPU 或 Gemini Robotics 的预发布能力当作唯一控制面。**

## 证据口径与研究限制

| 等级 | 口径 | 本文用法 |
|---|---|---|
| A | 监管申报、同行评审论文、Google/Alphabet/合作方直接公告和正式技术文档 | 成立、产品可用性、架构、披露营收、公开合作的承重事实 |
| B | 有署名的权威媒体、大学/客户技术材料 | 交叉验证融资史、市场结构、用户实践；不单独支撑交易结论 |
| C | 开发者论坛、GitHub issue、社区基准与个人经验 | 只描述开发者摩擦与待复现实测，不能推导“性能领先” |
| P | 本报告推断 | 明确标注，供投资/采购决策讨论，非公司事实 |

“Google”在历史材料中常指 1998 年成立的 Google Inc.；本报告主体按任务清单写作 Google LLC。2015 年 Alphabet 重组后，Google 成为 Alphabet 体系下的核心运营子公司。早期风险投资和 2004 年 IPO 是 Google Inc. 的资本史，不等同于当前 Google LLC 的独立融资。Alphabet 的 10-K 只披露集团与 Google Services/Google Cloud 分部，不披露 TPU 销量、单颗芯片毛利或 TPU 客户收入，所有这类数字均不应被臆测。[S9][S10]

## 纵向分析：从搜索公司自建机器到 TPU 云平台

### 1. 起点不是“造芯”，而是规模化计算的内生约束（1998—2015）

Google 由 Larry Page 与 Sergey Brin 创立，早期业务是网页检索。搜索、广告排序、YouTube、地图等服务的共同点是：请求量极大，数据和模型迭代持续，且任何一个通用服务器代际都不能自动消除成本压力。Google 很早就把数据中心、分布式存储和大规模计算当作产品能力的一部分；MapReduce、Bigtable、Borg 等内部系统后来也深刻影响了外部软件生态。这条历史很重要：TPU 并非先有一颗芯片、再寻找市场，而是先有持续且可预期的内部负载，再把重复的矩阵运算下沉到硅片。

2014 年 Google 收购 DeepMind，获得强化学习、深度学习和科学计算能力；2014—2016 年深度神经网络开始广泛进入搜索、翻译、语音与广告。这一时期的约束从“CPU 足不足”转为“乘加运算、内存访问与服务延迟能否以可接受的功耗完成”。Google 在 2015 年已将第一代 TPU 部署到数据中心，并在 2016 年 I/O 对外宣布；论文追溯其设计目标是面向推理、降低部署风险，选择更确定的定点矩阵乘法与片上大容量存储，而非追求像 GPU 一样的通用可编程性。[S1][S3][S16]

这里埋下了 Google 后来与 NVIDIA 的根本差异：NVIDIA 由开发者购买通用加速器和 CUDA 开始，再向云系统延伸；Google 由自己拥有的服务、模型和机房开始，再把为自身写的专用系统开放给云客户。前一种路径天然追求横向生态，后一种路径天然追求端到端效率与可靠性。

### 2. 第一代 TPU：用专用矩阵机证明“定制硅”可行（2015—2017）

TPU v1 是推理优先的 ASIC。Google 论文描述其核心为二维 systolic array（脉动阵列），在大量 MAC 单元之间直接传递部分和，以减少通用处理器频繁取指和寄存器访问带来的能耗；这也是随后 TPU 家族的架构母题。论文同时提醒了一个常被营销抹平的边界：TPU 的优势要看具体模型、内存容量和响应时间目标，不能把峰值算力直接等同于端到端优势。[S1]

从投资角度看，v1 的意义超过一代芯片。它让 Google 验证了三个组织能力：一是软件团队能把生产模型稳定映射到专用硬件；二是数据中心能承受非标准服务器部件的部署和维护；三是芯片、网络、编译器和模型团队可以围绕共同内部用户迭代。大量 AI 芯片创业公司拥有的只是一项设计能力，Google 当时已经开始形成这三项能力的组合。

但 v1 也暴露了专用化的代价。模型会从 CNN/RNN 快速迁移到 Transformer，训练的重要性上升，单一推理芯片无法覆盖需求。Google 的选择不是放弃 ASIC、转向完全通用 GPU，而是把 TPU 变成可扩展的训练系统：在此后的产品里补足 HBM、互联、浮点精度和编译器。这是一次“把早期好决策延长，而不是推倒重来”的战略转向。

### 3. 从内部项目到 Cloud TPU：硬件、编译器和租赁模式同时升级（2017—2020）

2017 年发布的 TPU v2 将 TPU 推向训练，并以 Cloud TPU 形式向外部客户提供；v3 进一步提高计算与内存带宽，并引入液冷等工程设计。对外出售的不是芯片所有权，而是可按云资源使用的 pod/VM。由此 Google 可把代际、固件、网络拓扑、故障域和资源调度留在自己手中，也避免客户因硬件锁定而承担运维风险。[S3]

软件层同时发生了更深的变化。TensorFlow 是较早的上层入口，但 TPU 不靠某一个框架生存：XLA 把 TensorFlow、JAX 和后来的 PyTorch/XLA 中的计算图编译到目标设备；JAX 用 NumPy 风格接口与自动微分服务研究人员；TPU VM、运行时和 ICI（Inter-Chip Interconnect）把多芯片视为可编程的集群。Google Cloud 的架构文档仍把 TPU 定义为以矩阵处理为中心的 ASIC，并明确 MXU、向量/标量单元与 HBM 的关系。[S2][S11][S12][S13]

这段演化带来了典型的双刃剑。好处是，Google 能将内部模型和外部客户经验反馈到云产品；坏处是开发者需要接受 XLA 编译、静态/半静态形状限制、特定调试链路与容量区域约束。社区中关于 PyTorch/XLA 编译时间、算子覆盖、性能调优和调试可观测性的讨论，说明 TPU 的“可用”绝不等于 CUDA 的“随手可用”。这些是 C 级用户信号，不能据此给出统一性能排序，但应写入采购尽调清单。[S11][S13][S24]

### 4. v4 之后：TPU 不再是一张卡，而是 AI Hypercomputer 的一个部件（2021—2024）

Transformer 和超大模型使瓶颈从单卡 FLOPS 延伸到网络、内存、编译、拓扑和作业恢复。Google 的回答是将 TPU v4 Pod 与光学/ICI 网络、数据中心网络、存储、编排和软件框架统称为系统。TPU v4 超级计算机论文介绍了由 4,096 个 TPU v4 芯片组成的系统，重点不只是规模，也包括可重构光交换（OCS）和故障隔离；具体训练收益仍取决于模型并行、通信模式和利用率，不能从该论文外推为所有工作负载的优势。[S4]

2023 年，Google Cloud 公布更偏性价比和推理/中等训练负载的 TPU v5e，以及面向最大训练的 TPU v5p 与 AI Hypercomputer。产品分层的商业逻辑很清楚：如果只卖最高端 pod，云端大模型的长尾调参、蒸馏、批量推理和中等规模训练会流向 GPU 或其他云；若用 v5e 覆盖成本敏感任务、用 v5p 覆盖大型同步训练，Google 才能把专用硬件转化为更连续的容量产品。[S5][S6]

2024 年发布的第六代 Trillium 延续“芯片—pod—软件”路线。官方给出相对于 TPU v5e 的训练性能和能效提升口径，但这是厂商声明，应在客户工作负载、精度、批量大小和可用 pod 尺寸固定后再复测。对采购者更实用的事实是：Trillium 说明 Google 仍以多年节奏推进 TPU；对竞争者更危险的事实是：每一代的需求、数据中心电力、互联与软件由同一主体协调，外部芯片厂商很难仅以一颗芯片复制这种迭代速度。[S7]

### 5. 生成式 AI 把内部负载与云客户拉得更近（2023—2025）

2023 年 Google 将 Google Brain 与 DeepMind 合并为 Google DeepMind，目的之一是缩短模型研究、训练基础设施和产品之间的距离；Gemini 系列成为 TPU 最显眼的内部负载。这里需保持口径：Google 可以宣布 Gemini/AlphaFold 在 TPU 上运行，但没有对外披露每个模型的训练卡时、训练成本、某一 TPU 代际占比，不能由此推算 TPU 经济性。[S8][S14][S17]

Ironwood（第七代 TPU）在 2025 年 4 月公布，是一个很明确的信号：Google 不再只把 TPU 叙事写成“训练加速器”，而将其定位为推理与 reasoning/agent 时代的系统。官方称 Ironwood 可在 256 或 9,216 芯片配置中提供；在后者下标称 42.5 exaflops、每芯片 192GB HBM、7.37TB/s HBM 带宽、双向 1.2TB/s ICI 带宽，并采用液冷。上述都是 A 级的一手“规格/宣布”事实，不是独立基准；“将在当年晚些时候可用”的表述也不能自动升级为所有区域与所有客户已可获得。[S8]

Ironwood 的设计尤其说明 Google 的路径依赖：MoE、长上下文、检索和 agent 推理会让 KV cache、embedding、跨芯片通信与功耗成为一等问题。Google 用 SparseCore、HBM、ICI 和 Pathways 共同应对，而不是仅扩大矩阵阵列。这个选择对具身模型也有启发：机器人 VLA 的成本往往受视觉编码、视频、记忆、动作频率和端云协同影响，不能只以语言模型的每 token 成本选型。

### 6. 从模型到具身：Gemini Robotics 是协同机会，不是现成的机器人交付件（2025—）

Google DeepMind 在 2025 年推出 Gemini Robotics 与 Gemini Robotics-ER，论文将前者描述为从 Gemini 2.0 出发、加入物理行动输出的视觉—语言—动作模型，强调泛化、交互性和灵巧操作；发布材料展示了与多种机械臂/机器人形态的实验。它是 Google 把基础模型、训练计算和具身数据/评测拉到同一张路线图上的最直接证据。[S14][S15]

但不能把演示误读为可直接采购的量产人形机器人“大脑”。论文基准、研究 API 或受限伙伴测试与安全认证、时延 SLA、离线故障策略、动作空间适配、数据权属和全生命周期支持之间仍隔着很长一段工程。对人形机器人公司，Google 的价值在于模型能力、云端开发环境与联合评测可能性；真正产品化的控制栈仍需保持本地可部署、可回放、可审计，并保留非 Google 的模型和算力路径。

### 7. 商业化和资本：TPU 是 Google Cloud 的差异化供给，而不是单独报表业务

Alphabet 2024 年 10-K 披露 Google Cloud 分部收入为 432 亿美元、经营利润为 61 亿美元；这是云整体（基础设施、平台、软件等）的分部数字，**不是 TPU 收入或利润**。这一点很容易被错误处理：TPU 对 Cloud 有战略价值，不代表可将 432 亿美元归因于 TPU。[S9]

Google 的商业飞轮是：Search/YouTube/广告与 Android 等巨大现金流支持数据中心和 R&D；内部模型制造稳定负载与工程反馈；Google Cloud 将可标准化的部分租给客户；外部客户的训练/推理需求又提高 pod 利用率并迫使工具链成熟。与独立芯片公司“先融资、流片、卖卡、再补软件”的现金流顺序不同，Google 能以集团资产负债表承受多代 ASIC 的前置投入。它也因此不是机器人公司可通过少数股权投资获得同等议价权的对象。

## 关键节点、产品和软件栈

| 时间 | 节点 | 对当下位置的影响 | 证据 |
|---|---|---|---|
| 1998 | Google Inc. 成立 | 搜索/广告形成超大规模计算和现金流基础 | [S10] |
| 2014 | 收购 DeepMind | 强化学习/基础模型研究与内部基础设施开始并轨 | [S16] |
| 2015/2016 | TPU v1 部署/公布 | 以推理需求验证专用矩阵 ASIC 与数据中心协同 | [S1][S3] |
| 2017—2018 | TPU v2/v3、Cloud TPU | 从内部能力变成可租用的训练/推理服务 | [S3] |
| 2021—2022 | TPU v4 Pod/系统论文 | 护城河扩展到互联、可重构网络与可靠性 | [S4] |
| 2023 | Google DeepMind 合并；v5e/v5p | 将模型组织和硬件供给同步，形成成本/性能分层 | [S5][S6][S17] |
| 2024 | Trillium 公布 | 多代演进继续，需用客户实测而非宣传比较 | [S7] |
| 2025 | Ironwood、Gemini Robotics | 推理优先 ASIC 与具身模型进入同一战略叙事 | [S8][S14] |

| 层 | 已公开、可验证组件 | 对开发者/采购者的含义 | 边界 |
|---|---|---|---|
| 硅与节点 | TPU、HBM、MXU、SparseCore、ICI、TPU Pod | 高密度矩阵计算与规模化同步通信 | 不是可自由采购的 PCIe 芯片 |
| 编译与运行时 | XLA、OpenXLA/StableHLO、libtpu、TPU VM | 图编译、设备目标化、多芯片执行 | 编译成功不等于性能可预测 |
| 框架 | JAX、TensorFlow、PyTorch/XLA | 研究、训练与推理的多入口 | PyTorch 生态深度仍需逐项目评测 |
| 分布式系统 | ICI、Pathways、Cloud 调度/存储/网络 | 大 pod 和跨 pod 的资源编排 | 公开信息不足以评估客户实际可得拓扑 |
| 产品/负载 | Google Cloud、Vertex AI、Gemini、AlphaFold、Gemini Robotics | 内部需求验证后向外部出租/合作 | 每一负载的 TPU 代际、成本与 SLA 未完全披露 |

## 融资历史与合作网络

### 融资/资本史（与 Google LLC 主体口径分开）

| 时间 | 事件 | 金额/口径 | 对主体与投资判断的含义 | 证据 |
|---|---|---|---|---|
| 1999 | Google Inc. 获 Kleiner Perkins、Sequoia Capital 早期风险投资 | 约 2,500 万美元；金额为历史公开材料常用口径，需以原始交易文件复核 | 早期公司融资，不是当前 Google LLC 融资 | [S18]（B/A 交叉） |
| 2004-08 | Google Inc. 首次公开募股 | 约 16.7 亿美元发行募资；以 SEC 发行文件为准 | 资本来源转为公开市场 | [S19] |
| 2015 | Alphabet 架构重组 | 不适用 | Google 成为 Alphabet 旗下运营公司，不能再把它当独立 VC 标的 | [S10] |
| 2015—研究截止日 | Google LLC | 未见独立对外融资披露 | TPU 的资本承载来自 Alphabet 集团现金流/资本开支，而非 Google LLC 融资轮 | [S9][S10] |

### 投资方/股东与资本关系

| 对手方 | 关系 | 可确认事实 | 证据强度 |
|---|---|---|---|
| Alphabet Inc. | 母公司/控制人 | Alphabet 重组公告明确 Google 置于 Alphabet 架构下；分部财务亦由 Alphabet 披露 | A，[S10][S9] |
| Kleiner Perkins、Sequoia Capital | Google Inc. 早期投资人 | 属历史资本关系，不应称为 Google LLC 当前融资方 | A/B，[S18] |
| 公开市场股东 | Alphabet 股东 | 通过 Alphabet 持有经济权益，而非对 Google LLC 单独投资 | A，[S9] |

### 客户/订单与容量关系

| 对手方 | 已确认关系 | 不应推出的结论 | 证据 |
|---|---|---|---|
| Anthropic | Google Cloud 是其计算/云合作方之一；双方公告过扩展合作与 TPU 使用计划 | 未披露所有模型、总支出、实际 TPU 利用率或排他性 | A，[S20][S21] |
| Google 自身（Search、Gmail、Gemini、AlphaFold 等） | Google 公告称 TPUs 支撑其内部关键训练/服务工作负载 | 内部负载的芯片代际/采购价格不可从公告推得 | A，[S8] |
| 其他 Google Cloud 客户 | Cloud TPU 面向外部提供 | “可访问”不等于特定区域/规格/价格均可获得 | A，[S2][S3] |

### 产业合作

| 对手方 | 关系及价值 | 证据/边界 |
|---|---|---|
| NVIDIA、AMD 等 | Google Cloud 同时提供 GPU/CPU 等资源，是客户选择层面的替代/共存，而非 TPU 供应链披露 | 产品目录可证共存；具体采购/供货额未披露 [S22] |
| 数据中心与设备供应链 | 液冷、HBM、网络/光互联是 TPU 系统必要组成 | Google 未在公开 TPU资料中完整披露 BOM、晶圆代工、HBM供应与锁量，不能列具体供应商 [S7][S8] |
| Apptronik 等机器人伙伴 | Gemini Robotics 的外部验证/合作生态仍在扩展 | 以各方直接公告逐项确认，不能把演示厂商泛称为客户；本报告只将其视为合作线索 [S15] |

### 技术/联合研发与科研渊源

| 来源/伙伴 | 关系 | 对 Google TPU/机器人路线的意义 | 证据 |
|---|---|---|---|
| Google Brain、DeepMind | 2023 年合并为 Google DeepMind | 模型研究、分布式系统与产品组织耦合更紧 | B（媒体交叉验证；交易前应补 Google 原公告），[S17] |
| Google Research/TPU 论文作者 | 发表 TPU 性能与架构论文 | 为 v1/v4/Pathways 的技术事实提供可审计材料 | A，[S1][S4][S25] |
| JAX/OpenXLA 社区 | 开源框架、编译器与中间表示生态 | 是降低 TPU 开发门槛的重要公共接口，但不消除硬件绑定 | A，[S11][S12] |
| Google DeepMind 与机器人研究/伙伴 | Gemini Robotics 论文与合作/测试 | 是 VLA 研究协同的候选入口，而非控制器量产承诺 | A，[S14][S15] |

## 横向分析：Google 在竞争图谱中的位置

### 1. 竞争场景判断

这是“竞品充分”的场景。Google TPU 面对的并非一类竞争者：NVIDIA 是从硬件到软件的通用 AI 平台；AWS Trainium/Inferentia 是同样的云内自研 ASIC；Microsoft Azure 的加速器策略是以 NVIDIA/AMD 供给、软件平台与自研芯片并举；AMD 则是最重要的可由客户自持或通过云获得的 GPU 第二源。它们的共同替代对象是训练/推理预算与开发时间，不只是某颗芯片。

| 维度 | Google TPU/Cloud | NVIDIA | AWS Trainium/Inferentia | Microsoft Azure | AMD Instinct/ROCm |
|---|---|---|---|---|---|
| 核心商品 | 云端 TPU pod 与 AI 平台 | GPU、网络、系统与 CUDA 生态 | AWS 内部/云端 ASIC 与服务 | 云端 AI 平台、GPU 供给及自研加速器 | GPU 与 ROCm，云/自建皆可 |
| 最强位置 | 内部模型+云+ASIC+数据中心一体化 | 开发者生态和跨云/自建可得性 | AWS 客户内的成本/服务整合 | 企业 Azure/微软产品分发 | NVIDIA 第二源、开放硬件选择 |
| 最大短板 | 硬件不可自持、迁移/工具链学习成本 | 价格、供给、单一生态风险 | 外部软件心智与跨云可移植性 | 自研硬件透明度和生态一致性 | 软件成熟度/模型适配须项目验证 |
| 机器人公司的典型用途 | 大模型训练备选、Gemini/VLA 联合探索 | 主生产训练、端到端工具链 | 云上成本敏感训练/推理备选 | 企业集成/云部署备选 | 训练第二源与成本谈判 |

### 2. NVIDIA：Google 最强的生态学对手，也常是同一云中的共存项

NVIDIA 的竞争优势不是单一 GPU，而是 CUDA、cuDNN/NCCL、框架适配、第三方工具、NVLink/NVSwitch 和 OEM/云厂商交付形成的开发者惯性。对机器人公司，这意味着具身数据管线、仿真、视觉模型、强化学习、推理优化和端侧部署更容易在同一供应商工具链内找到先例。Google TPU 的优势无法通过宣称更高的某项峰值规格抵消这一点；团队的现有代码、算子和人才结构决定迁移成本。[S26]

Google 仍有真实的反击位置。其内部 Gemini、AlphaFold 和搜索规模负载是 TPU 的持续设计伙伴，Cloud 直接把硬件、网络、存储和调度作为一个合同对象。对于能够从 JAX/XLA 或 PyTorch/XLA 平滑编译、且训练规模足以使用 pod 的团队，TPU 是对 NVIDIA 配额、价格和供货周期的有效谈判杠杆。可是它不能成为“把 CUDA 代码放进去就自然等价”的假设：机器人项目应对数据读取、视觉算子、分布式 checkpoint、profiling、可复现性和故障恢复逐项压测。[S2][S11][S13]

开发者视角的真实分野在此：CUDA 用户通常重视资料、现成库和调试工具的广度；JAX/TPU 用户重视函数式并行、XLA 编译和大规模 pod 的抽象。两者并非谁更先进，而是工作流不同。使用 Kubernetes、PyTorch 和大量自定义 CUDA kernel 的团队，最可能在转换层付出代价；愿意将核心训练环路重构到 JAX、并拥有稳定大作业的团队，才可能吃到 Google 系统协同的收益。该判断为 P，必须通过客户自身代码验证。

### 3. AWS：最像 Google 的商业对手，却有不同的开源策略

AWS 的 Trainium 和 Inferentia 同样来自一个拥有巨大云负载、数据中心和客户分发渠道的超大规模厂商。它们的相似性在于：客户买的是云服务而非芯片，硬件迭代的真实价值取决于 SDK、框架支持、容量、定价和托管服务；它们与 Google TPU 都能把内部 ASIC 的经济性变成云端差异化。

差异在于开发者入口和商业重心。AWS 强调 Neuron SDK、PyTorch/TensorFlow 集成、Bedrock/SageMaker，以及对 AWS 已有客户的迁移；Google 的重心更显著地落在 JAX/XLA、Vertex AI、Gemini/DeepMind 与 TPU pod。对机器人公司而言，若数据、权限、日志和生产服务已经深度在 AWS，切到 TPU 可能节省某一训练作业却增加总体云运维成本；若希望把基础模型/具身研究与 Gemini 生态绑在一起，Google 的协同会更强。[S27][S2]

用户评价中，两者都有“性价比依赖模型和 batch、工具链有专门约束”的共同问题。应避免把厂商自测的成本/训练速度直接比较，因为精度、模型、网络和有效利用率常不同。正确采购动作是拿一套冻结的数据版本、动作表示和训练预算，同时在 TPU、GPU 和 AWS ASIC 上跑一次；以完成实验的墙钟时间、失败重跑时间、有效样本吞吐和工程人日，而非表面 $/chip-hour，决定主路径。

### 4. Microsoft Azure：产品分发和企业控制面更强，芯片路线仍需拆开看

Azure 在 AI 基础设施上提供 NVIDIA/AMD 等加速资源，并发展自研 Maia 等方案；其差异化更常来自企业身份、安全、Office/Windows/GitHub/Azure 的分发与管理面，而不只是客户对某一种 Azure 自研 ASIC 的忠诚。Google 的优势是自研 TPU 与其基础模型研发的紧耦合，Azure 的优势是大量企业工作流已经在其控制面内。

对人形机器人公司，若目标客户是大型制造/零售企业，Azure 的身份治理、数据落地与企业集成可能比 TPU 的理论训练效率更决定成交；若核心问题是前沿 VLA 研究及其算力供给，Google Cloud/DeepMind 是值得设立技术合作路径的对象。不要把“Google 的模型更强”或“Azure 的企业客户更多”直接推导为采购结论；机器人场景的摄像头数据跨境、隐私、边缘同步、事故追溯和现场网络条件才是决定性约束。[S28][S14]

### 5. AMD：硬件第二源的含义比参数排名更重要

AMD Instinct/ROCm 代表一种 Google TPU 不提供的选择：客户可以在不同云或自有机房获取较为一致的 GPU 类硬件路线，并逐步降低 NVIDIA 单源风险。它的价值来自供应链和部署自由度，而不仅是加速器性能。ROCm 的成熟度在不同框架、模型和版本上差异很大，正如 TPU 的 XLA 路径也有其适配边界；两者都必须按工作负载验收。[S29]

Google 与 AMD 不完全是零和。Google Cloud 自身也提供 GPU 资源，真正的竞争发生在客户作业调度、预算和开发者时间。对机器人公司，AMD 可作为自建/多云训练的第二源，TPU 可作为需要 Google 模型与云生态的第三条能力线。把二者都当“便宜替代品”会错过根本：AMD 解决的是硬件可得性/可部署性，TPU 解决的是 Google 内生系统协同。

### 6. 生态位判断

Google 处在一个罕见位置：它不是纯芯片商，也不只是云；其前沿模型团队本身就是 TPU 的首位高要求用户。这带来四项优势：

1. **需求真实且连续。**内部搜索、推荐、生成式 AI 与科学模型带来长期负载，ASIC 不需要完全依赖外部订单才能迭代。[S8]
2. **系统可共同设计。**芯片、ICI、数据中心液冷、编译器和分布式运行时能够围绕相同模型路线演进。[S4][S8]
3. **云是交付和试验场。**Google 可以按 pod/服务开放，而不用暴露完整硬件供应链与客户运维复杂度。[S2]
4. **具身模型可能形成新负载。**Gemini Robotics 为视觉—语言—动作研究提供内部牵引，但仍处于需要外部工程验证的阶段。[S14]

相应的短板同样结构化：用户不能把 TPU 作为自有资产部署；Google 对供应链与实际客户利用率披露有限；框架/编译器迁移成本实际存在；并且对中国机器人业务，跨境数据、出口管制、云可得区域和商业连续性可能比技术能力更早构成约束。Google 的位置不是“取代 NVIDIA”，而是把云端高强度模型训练/推理的一部分价值从通用 GPU 链条重新吸入自己体系。

## 横纵交汇洞察与三种剧本

### 历史怎样塑造今天的位置

TPU 的优势不是 2025 年突然出现的 Ironwood，也不是一篇基准报告。它来自至少十年的复利：搜索与广告业务先训练出大规模运行能力；DeepMind/Google Brain 带来模型需求；TPU v1 证明 ASIC；v2/v3 把 ASIC 变成外部云服务；v4 以后把网络和可靠性纳入产品；Gemini 与 Gemini Robotics 再把推理与具身负载推回基础设施。这是一条从应用反推系统的路线。

也正是这条路线限制了 Google。内部优化可以非常深，却不必然等价于外部开发者的最低摩擦。NVIDIA 的优势来自“人人都能在多种机器上写 CUDA”的横向网络，Google 的优势来自“自己能把最难的模型在自己的系统上跑起来”的纵向网络。机器人公司不应要求其中一条路线完全战胜另一条；更好的策略是利用两条路线之间的张力压低成本并维持迁移能力。

### 优势和劣势的历史根源

| 当下特征 | 历史根源 | 对投资/采购的含义 |
|---|---|---|
| TPU 多代与系统级 ICI/HBM/液冷协同 | 自 2015 年起持续部署、自有机房与内部服务 | 不能用单芯片创业公司的一代产品与其简单等价比较 |
| JAX/XLA/Pathways 的大规模抽象 | 内部模型和分布式系统长期共演化 | 适合愿意重构训练栈的团队；需将迁移人日计价 |
| 强大的内部模型牵引 | DeepMind/Google Brain 合并、Gemini 负载 | 合作价值高，但模型/云依赖也更强 |
| 外部生态摩擦 | 不是以独立硬件和通用开发者优先起家 | 必须保留 PyTorch/CUDA 或其他开放路径 |
| 供应/成本透明度有限 | TPU 以托管云容量交付、集团不拆分财务 | 采购谈判要索取区域、容量、SLA、涨价和退出条款 |

### 三个剧本（P：研究者推演）

| 剧本 | 触发条件 | Google 的位置 | 对人形机器人公司的动作 |
|---|---|---|---|
| 最可能：多加速器并存 | 推理需求继续增长；CUDA 惯性仍强；云客户追求第二源 | TPU 在 Google Cloud 和少数大客户的大训练/推理中持续扩大，但不替代通用 GPU | 维持 GPU 主训练栈；每半年用冻结 VLA/视频任务跑 TPU 基准；把 GCP 作为可切换容量池 |
| 最危险：锁定而不可迁移 | 因模型 API、数据管道或折扣深绑 Google；区域容量/合规变化 | 技术协同变成供应与数据控制风险 | 训练数据保留可导出格式；模型接口、评测、checkpoint 与部署控制面独立；合同写入出口与迁移支持 |
| 最乐观：Gemini Robotics 与 TPU 形成具身飞轮 | VLA 在泛化、数据效率和安全评测上取得可复现进展；Google 提供稳定合作/部署接口 | Google 成为高端具身基础模型和云训练的关键伙伴 | 用联合 PoC 取得能力而非股权；以非独家、数据权属、离线降级和安全验收换取更深合作 |

## 面向人形机器人公司的行动建议

| 决策对象 | 建议动作 | 理由 | 风险、触发条件与下一步验证 |
|---|---|---|---|
| Google LLC 股权/并购 | **不建议作为通常投资或并购标的** | Google LLC 是 Alphabet 体系内核心运营资产，不存在适合本公司取得控制权的交易窗口 | 若出现可独立交易的团队、软件资产或区域合作主体，另行核验权属；不可把技术合作误写成并购机会 |
| GCP TPU 训练 | **采购性试点，非立即主路径** | 可为 GPU 配额/价格提供第二源，并检验 JAX/XLA 对 VLA、视频和具身数据的适配 | 先做 6—8 周封闭 POC：固定数据、模型、精度、全球 batch；比较有效样本吞吐、墙钟、失败率、工程人日和全成本；不以峰值 FLOPS 判定 |
| Gemini Robotics/DeepMind | **建立非独家技术合作与评测入口** | 是 Google 将多模态模型和物理行动连接的少数直接证据 | 前置签署数据不用于训练、输出/IP、事故责任、地区合规、模型变更通知和退出条款；先在低风险任务/仿真评测，不接管安全关键控制回路 |
| 端侧/本体推理 | **坚持自研系统集成、采购多家端侧芯片/模型，不依赖 TPU** | TPU 是云端数据中心 ASIC；机器人必须处理断网、低时延、功能安全、隐私与现场维保 | 建立端云切分基准：端侧最低功能、云端增强、离线回退、遥操作；每一层有可观测日志和回放 |
| AI 芯片投资 | **投资“可迁移软件、网络/内存和机器人负载优化”，谨慎押注单一 TPU 复制品** | Google 的壁垒是系统闭环，孤立 ASIC 很难复制；机器人仍需要成本/能效/端侧等空白 | 投资门槛：真实流片/客户、工具链、框架后端、集群或端侧实测、供应/IP；要求在 NVIDIA/TPU/AWS/AMD 任一主平台上可比验证 |

建议的验收指标不是“是否能跑通 TPU”，而是：①训练配方能否在两条以上硬件路线复现目标指标；②迁移用时是否小于预期节省的算力费用；③数据和 checkpoint 能否完整迁出；④机器人现场控制在云中断时是否安全降级；⑤Google 的实际可供区域、pod 配置、预留容量、支持响应和价格条款是否满足交付窗口。

## 证据/来源核验表

| 结论/事实 | 来源 | 等级 | 使用边界 |
|---|---|---|---|
| TPU v1 的架构、设计目标和 2015 部署背景 | [S1] | A | 论文对特定年代/负载的测量，不替代最新性能实测 |
| TPU 是矩阵处理 ASIC、MXU/HBM 等架构描述 | [S2] | A | 官方技术文档，不含客户经济性 |
| Cloud TPU v2/v3 的对外云化 | [S3] | A | 发布事实，不证明当年所有地区供给 |
| v4 的 4,096 芯片系统、OCS/可靠性研究 | [S4] | A | 学术系统描述，不等于每个客户 pod |
| v5e/v5p/Trillium 的发布与官方指标 | [S5][S6][S7] | A | 为厂商规格/声明，采购需复测 |
| Ironwood 的第七代、9,216 芯片配置、规格 | [S8] | A | 以公告可用状态为限，不把宣布等同普遍交付 |
| Google Cloud 2024 收入/利润 | [S9] | A | 分部数，不可归因到 TPU |
| Google/Alphabet 重组、主体关系 | [S10] | A | 用于法人/资本口径 |
| XLA/JAX/PyTorch-XLA 的开发入口 | [S11][S12][S13] | A | 文档证实接口存在，不证实任意模型性能 |
| Gemini Robotics 的研究能力 | [S14][S15] | A | 研究/发布材料，不是量产安全认证 |
| Anthropic 等合作 | [S20][S21] | A | 只确认公告范围，不推断订单/排他/使用率 |
| 开发者迁移/调试摩擦 | [S24] | C | 作为访谈与 POC 问题清单，不能量化市场份额 |

## 冲突与未确认事项

| 事项 | 已有支持证据 | 反向证据/缺口 | 对结论的影响与需验证动作 |
|---|---|---|---|
| TPU 的真实外部商业规模 | Google Cloud 分部盈利、客户合作、持续代际发布支持其商业重要性 | Alphabet 不披露 TPU 收入、客户数、利用率、单价和毛利 | 不以“TPU 市占/收入”作投资模型输入；向销售方索取项目容量/价格/SLA |
| Ironwood/Trillium 的客户可得性 | 官方有规格与公布计划 | 地区、排队、实际可供 pod、软件成熟度并非公告中完整给出 | POC 前取得书面区域/容量/支持承诺 |
| Gemini Robotics 的量产适用性 | 论文和发布材料表明研究能力与合作意愿 | 缺现场安全、长时任务、故障处理、成本和数据治理的公开证据 | 只做沙箱/低风险任务；建立独立安全控制层 |
| TPU 相对 GPU 的 TCO | 官方有性能/能效宣传，社区有正反经验 | 工作负载、优惠、迁移人日和失败率高度不同；无统一公开对照 | 用本公司 VLA 训练和推理管线做盲测，记录全成本 |
| 供应链与地缘可持续性 | Google 持续供给多代芯片 | 晶圆厂、HBM、封装、地区限制及中国业务可得性披露不足 | 采购前法务/供应链核验，保持非 Google 训练与端侧路径 |

## 产业链分类复核

**主分类：`1.2 TPU（ASIC）`（高置信）。**Google 已公开将 TPU 描述为为机器学习加速而设计的 ASIC，技术文档给出脉动阵列 MXU、HBM 和 Cloud TPU 的系统架构；从 2017 年起，Cloud TPU 已是可对外使用的服务。公司价值创造不等于单卖芯片，但 TPU 是其 AI 加速基础设施的硬件锚点，最符合本库对 1.2 的定义。[S1][S2][S3]

**正式次分类：`2.1 加速计算平台（CUDA-like）`（高置信，非主分类）。**Google 有跨代持续建设的软件平台和开发者产品：TPU VM/运行时、XLA 编译器、JAX/TensorFlow/PyTorch-XLA 后端、分布式 ICI/Pathways，以及 Google Cloud 文档和可用产品。按分类规则的七项软件栈，驱动/运行时、编译器、主流框架后端、设备编程/编译扩展、通信/分布式能力、文档与客户使用均可找到公开证据，足以进入 2.1；但其商业价值主承载仍是 TPU 云算力，故列为次类。[S2][S11][S12][S13][S25]

**不列正式次分类：`5.1 训练框架`、`5.2 推理框架`。**Google 创办/维护 TensorFlow、JAX 等框架生态，也用 Vertex AI 提供服务；但该公司在本报告研究口径下的主要价值创造与比较对象是“TPU+Cloud 的垂直加速平台”，不是独立训练/推理框架公司。把框架能力单列为正式分类会稀释主标签；相关能力已作为 2.1 平台证据记录。`6.4/6.5` 为模型类型和计算负载，不因 Gemini/Gemini Robotics 的存在而将 Google 自动归入 AI infra 投资标的，符合分类规则。

## 信息来源

访问日期均为 2026-08-11；链接失效或内容更新时，应回到原始发布页及监管文件复核。

- [S1] Google Research et al., *In-Datacenter Performance Analysis of a Tensor Processing Unit*, ISCA 2017 / arXiv，A：<https://arxiv.org/abs/1704.04760>
- [S2] Google Cloud, *System architecture — TPU*，A：<https://cloud.google.com/tpu/docs/system-architecture-tpu-vm>
- [S3] Google Cloud, *Announcing Cloud TPU*，A：<https://cloud.google.com/blog/products/gcp/announcing-cloud-tpu-google-s-new-way-to-accelerate-machine-learning-workloads-at-scale>
- [S4] Google Research et al., *A Large-Scale System for ML Training: TPU v4*, arXiv，A：<https://arxiv.org/abs/2208.02600>
- [S5] Google Cloud, *Introducing Google Cloud TPU v5e*，A：<https://cloud.google.com/blog/products/compute/introducing-google-cloud-tpu-v5e>
- [S6] Google Cloud, *Introducing Cloud TPU v5p and AI Hypercomputer*，A：<https://cloud.google.com/blog/products/compute/introducing-cloud-tpu-v5p-and-ai-hypercomputer>
- [S7] Google Cloud, *Introducing Trillium, sixth-generation TPUs*，A：<https://cloud.google.com/blog/products/compute/introducing-trillium-6th-generation-tpus>
- [S8] Google, *Ironwood: The first Google TPU for the age of inference*, 2025-04-09/23 更新，A：<https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/ironwood-tpu-age-of-inference/>
- [S9] Alphabet Inc., 2024 Form 10-K，A：<https://www.sec.gov/Archives/edgar/data/1652044/000165204425000014/goog-20241231.htm>
- [S10] Larry Page, *G is for Google*, Alphabet 官方博客，A：<https://abc.xyz/2015/08/10/google-alphabet.html>
- [S11] OpenXLA, *XLA architecture/documentation*，A：<https://openxla.org/xla>
- [S12] JAX Documentation，A：<https://docs.jax.dev/en/latest/>
- [S13] PyTorch, *PyTorch/XLA documentation*，A：<https://docs.pytorch.org/xla/release/stable/>
- [S14] Google DeepMind et al., *Gemini Robotics: Bringing AI into the Physical World*, arXiv，A：<https://arxiv.org/abs/2503.20020>
- [S15] Google DeepMind, *Gemini Robotics brings AI into the physical world*, A：<https://deepmind.google/discover/blog/gemini-robotics-brings-ai-into-the-physical-world/>
- [S16] BBC News, *Google buys artificial intelligence company Deepmind*, 2014-01-27，B（用于并购日期交叉验证）：<https://www.bbc.com/news/technology-25874230>
- [S17] BBC News, *Google merges AI teams Google Brain and DeepMind*, 2023-04-20，B（组织合并日期交叉验证）：<https://www.bbc.com/news/technology-65269380>
- [S18] Sequoia Capital, *Google* portfolio/history material，B（融资金额需进一步核原始文件）：<https://www.sequoiacap.com/companies/google/>
- [S19] Google Inc. IPO registration/SEC archive，A：<https://www.sec.gov/Archives/edgar/data/1288776/000119312504073639/ds1.htm>
- [S20] Google Cloud, *Anthropic and Google Cloud partnership*，A：<https://cloud.google.com/blog/products/ai-machine-learning/anthropic-and-google-cloud-announce-partnership>
- [S21] Anthropic, *Anthropic expands its Google Cloud partnership*, A：<https://www.anthropic.com/news/anthropic-expands-google-cloud-partnership>
- [S22] Google Cloud, *GPU platform/product documentation*，A：<https://cloud.google.com/compute/gpus>
- [S24] PyTorch/XLA GitHub issues/discussions，C：<https://github.com/pytorch/xla/issues>
- [S25] Google Research et al., *Pathways: Asynchronous Distributed Dataflow for ML*, arXiv，A：<https://arxiv.org/abs/2203.12533>
- [S26] NVIDIA, CUDA documentation，A（仅证实产品能力，非市场份额）：<https://docs.nvidia.com/cuda/>
- [S27] AWS, Trainium/Neuron documentation，A：<https://aws.amazon.com/machine-learning/trainium/> 与 <https://awsdocs-neuron.readthedocs-hosted.com/>
- [S28] Microsoft News, *Introducing Microsoft Azure Maia and Cobalt*, A：<https://news.microsoft.com/source/features/ai/introducing-microsoft-azure-maia-and-cobalt-ai-chips/>
- [S29] AMD, ROCm documentation，A：<https://rocm.docs.amd.com/>

## 方法论说明

本报告采用横纵分析法：纵轴追踪 Google 从内部计算需求、TPU、Cloud TPU、AI Hypercomputer 到 Gemini Robotics 的路径；横轴将其与 NVIDIA、AWS、Azure 和 AMD 的供给模式及开发者选择对照。判断区分已披露事实、厂商声明、社区信号与研究者推断；任何实际采购、合作、投资或并购行动均需以项目级 POC、合同、合规审查与尽调材料复核。
