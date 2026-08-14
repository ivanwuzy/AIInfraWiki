# 曦智科技（Lightelligence）横纵分析报告

> Source: 本地文件《横纵研究报告/曦智科技Lightelligence_横纵分析报告.md》
> Collected: 2026-08-07
> Published: 2026-08-06

# 曦智科技（Lightelligence）横纵分析报告：光电计算卡与光互联并行推进，主类应由当前收入承载物而非“光子”一词决定

> 研究截止日：2026-08-06｜对象：曦智科技（Lightelligence）｜类型：光电混合 AI 计算与数据中心光互联公司｜主体/产品证据：公司官网、产品页、开发者社区、投资者关系页可访问

## 一句话定义

**曦智科技是一家将光学矩阵计算做成 PACE® 2 光电加速计算卡，同时把硅光/CXL 互联和分布式光路交换做成 Photowave®、Lightsphere X 产品线的公司；它不是待消歧的 GPU/NPU 项目，而是同时拥有“计算加速”和“数据中心互联”两条商业化路径的光电系统公司。** [Lightelligence 官网](https://www.lightelligence.ai/)、[PACE 2 产品页](https://www.lightelligence.ai/products/photon-computing/pace2)、[Photowave 产品页](https://www.lightelligence.ai/products/photon-network/photowave)。

## 证据边界与实体裁决

此前将其套入“主体未知的 AI 芯片项目”模板是错误的。公司官网明确以 Lightelligence 对外运营，提供公司介绍、产品、开发者社区和投资者关系入口；官网首页把产品分为 Optical Computing 与 Optical Fabric，并列出 PACE 2、Gazelle、Photowave 和 Lightsphere X。[官网](https://www.lightelligence.ai/)、[公司介绍](https://www.lightelligence.ai/about-us/company-profile)、[开发者社区](https://www.lightelligence.ai/community)、[投资者关系](https://www.lightelligence.ai/ir/investor-relations)。

但“主体已明确”不等于每个商业命题都已验证。公司产品页能证明对外产品边界和技术定位；不能单独证明每个 SKU 的收入、出货、毛利、客户续购或性能在所有模型上领先。以下分别标注：公司一手产品事实、公开新闻/招股资料、以及需要客户/审计材料才能确认的判断。

| 证据等级 | 含义 | 本报告使用 |
|---|---|---|
| A | 官网、产品页、开发者社区、IR/上市文件 | 产品、技术和对外商业边界 |
| B | 客户公告、论文、公开技术演示 | 工作负载/部署的交叉验证 |
| C | 媒体、产业研究 | 融资和竞品发现线索 |
| E | 本报告推断 | 投资、机器人协同与分类判断 |

## 纵向分析：从光子 AI 计算研究到“计算 + 网络”双产品线

### 起源：光计算并非拿光替换所有数字逻辑

Lightelligence 的公开定位是以光子技术和相关商业应用提升 AI 时代计算能力；其光计算路线利用光的低时延、低功耗和高吞吐特性，通过大规模光电集成提升单卡计算能力。[官网](https://www.lightelligence.ai/)。光学计算最适合承担矩阵乘等规则、并行度高的数据路径；控制、非线性、存储、量化、激活与软件编排仍需电子系统协作。因此正确理解其产品不是“全光通用计算机”，而是光电混合加速器和系统基础设施。

这个选择决定了公司最初的竞争姿态。它没有尝试复制完整 GPU 图形/API 生态，而是把光子器件、电子控制和软件映射组合，用于 AI/HPC 的高吞吐内核。优势是有机会突破电子互连、带宽和能耗约束；负担是光学器件误差、温漂、封装、校准、软件映射和系统可维护性都会成为产品的一部分。光子算力若不能连同校准、驱动和模型部署一起交付，只是实验室性能。

### 产品化：PACE 2 与 Gazelle 使“光计算”有了可测试形态

公司将 PACE® 2 明确称为“Optoelectronic Accelerated Computing Card”，并将 Gazelle® 列为光计算评估板。[PACE 2](https://www.lightelligence.ai/products/photon-computing/pace2)、[Gazelle](https://www.lightelligence.ai/products/photon-computing/gazelle)。这两种产品形态有清晰商业含义：PACE 2 是进入数据中心/服务器系统的计算产品，Gazelle 则降低开发者和客户评估光计算的门槛。相比只发布论文的光子公司，开发板、产品页和社区构成了更强的工程交付信号。

但仍需避免参数幻觉。任何声称 PACE 2 在某类大模型上更快/更省电的判断，都必须带模型、精度、batch、输入长度、主机配置和系统功耗条件。光电加速很可能在某些矩阵/推理工作负载上占优，却不自动涵盖动态 shape、稀疏 MoE、长上下文 KV cache、复杂控制流或训练反向传播。投资和采购应采用端到端任务成本，而不是以“光”推断一切性能优势。

### 第二条腿：把光子能力延展到数据中心网络

公司官网把 Optical Fabric 单列为产品族，称其利用光网络技术（oNET）和先进光学，在芯片、卡、服务器和机架尺度提供光互联产品与方案。[官网 Optical Fabric 说明](https://www.lightelligence.ai/)。Photowave® 被定义为 CXL optical interconnect hardware products，Lightsphere X 被定义为 distributed optical circuit switch（dOCS）。[Photowave](https://www.lightelligence.ai/products/photon-network/photowave)、[Lightsphere X](https://www.lightelligence.ai/products/photon-network/wrapwave)。

这是关键战略转折：公司不再只依赖“光计算替代电子加速卡”的单一赌注，也在利用硅光/封装/系统能力解决 AI 集群的互联瓶颈。计算卡与光网络共享部分光子制造和封装能力，但客户购买理由不同：前者为模型算力与能效，后者为带宽、时延、拓扑灵活性、CXL 内存/资源池化与集群扩展。必须分别评估收入和竞争力，不能把两者合为“光子芯片”。

### 当前阶段：产品组合与资本市场的双重检验

官网设有投资者关系、上市文件、公告和财务报告入口，说明公司已进入需要公开披露/资本市场沟通的阶段。[IR 首页](https://www.lightelligence.ai/ir/investor-relations)、[上市文件](https://www.lightelligence.ai/ir/listing-documents)、[公告](https://www.lightelligence.ai/ir/announcements)。这比早期融资新闻更适合用来核对主体、风险与商业化口径。具体募资、收入、客户集中、库存和持续经营能力应以对应文件的最新版本为准，不能在没有逐页核验时摘取媒体数字。

纵向上，公司的优势根源正在从单点“光计算研究”变为双产品线工程能力：光学计算卡需要系统软件和校准，CXL/光路交换需要互联协议、光模块、控制面和机架级交付。劣势也来自同一选择：同时推进计算和网络会加大研发、供应链、认证和销售复杂度；若任一产品线尚不能形成可重复收入，技术广度会变成资本消耗。

## 横向分析：代表玩家和客户真正购买的东西

| 玩家/路线 | 用户选择理由 | 对 Lightelligence 的检验 |
|---|---|---|
| NVIDIA GPU/CUDA | 通用模型、软件生态、开发者和系统兼容 | PACE 2 必须在具体任务上以系统成本/能效覆盖迁移成本 |
| 光本位/其他光计算初创 | 同样主张光电矩阵计算与低功耗 | 比较可用产品、软件、封装、客户与可复现 benchmark，而非概念 |
| CXL/电子互联方案 | 协议成熟、服务器生态广、部署风险低 | Photowave 必须证明链路、运维和成本价值 |
| Broadcom/NVIDIA 网络与传统交换 | 规模化交换、软件和客户基础 | Lightsphere X 要证明拓扑/功耗/扩展优势和可靠性 |
| 曦智的 Gazelle 开发路线 | 客户可先测试光计算再部署 | 社区、工具、校准和支持速度决定转化率 |

NVIDIA 的 CUDA 和 TensorRT 仍是模型开发的事实基线。[CUDA](https://developer.nvidia.com/cuda-toolkit)、[TensorRT](https://developer.nvidia.com/tensorrt)。光计算卡的壁垒不会只来自光学 MAC，而来自能否把主流框架模型以稳定、可调试的方式映射到硬件。Gazelle 和开发者社区是积极信号，[Gazelle](https://www.lightelligence.ai/products/photon-computing/gazelle)、[社区](https://www.lightelligence.ai/community)，但公开独立用户反馈、长期生产事故复盘和跨模型 benchmark 仍相对有限；该缺口需要在 POC 中由开发者实测填补。

在互联方面，Photowave 的 CXL 定位使其更接近服务器/机架级资源互联，而 Lightsphere X 的 dOCS 定位指向可重构光路交换。[Photowave](https://www.lightelligence.ai/products/photon-network/photowave)、[Lightsphere X](https://www.lightelligence.ai/products/photon-network/wrapwave)。两者不应混作“Scale-up”或“Scale-out”：CXL 通常服务节点内/近节点资源扩展，可能对应 scale-up；dOCS 的实际部署若用于跨机架/数据中心 fabric，才更接近 scale-out。最终必须由产品拓扑、端口、部署范围和收入合同判断。

## 横纵交汇与三种剧本

### 最可能剧本

公司以 PACE 2/Gazelle 进入少量高价值 AI/HPC 推理或计算场景，同时以 Photowave/Lightsphere X 抓住 AI 数据中心互联升级。光互联业务可能较计算卡更容易嵌入既有基础设施，但也面临协议、服务器认证和大厂网络生态；计算卡保留更高的架构上行空间，却需长期跨越软件迁移门槛。应观察客户 POC 是否转为重复系统交付。

### 最危险剧本

光计算能效优势无法跨越模型适配、校准、封装成本和软件维护；光互联产品虽有技术展示却难以进入现有网络供应链。此时双线研发会放大现金消耗，收入停留在评估板、试点或定制工程。危险信号包括无可复现端到端 benchmark、产品升级依赖现场手工校准、CXL/光交换缺乏长期部署、客户订单和收入不能分线披露。

### 最乐观剧本

PACE 2 在大规模推理/矩阵工作负载证明可持续的系统级 TCO 优势，Gazelle/软件显著降低开发者迁移门槛；Photowave 与 Lightsphere X 又在 AI 集群资源池化和可重构网络中获得标准化订单。届时计算与网络共享光子供应、封装和系统客户，形成光电基础设施平台，而非单品光芯片公司。

## 人形机器人公司的投资、并购与协同判断

**训练：选择性适用。** 先用稳定视觉编码器、仿真批处理或 teacher inference 测 PACE 2，不假定其替代 VLA 全训练。必须比较收敛、精度、吞吐、功耗、迁移人天和故障恢复。

**推理：更适合数据中心/工厂侧批量推理。** 人形机器人本体的低功耗、实时安全控制并非其公开主产品边界；可把它用于云端视频重标注、模型蒸馏、仿真回放和 fleet 数据处理。

**数据闭环：有潜在协同。** 若光计算卡降低批量视觉/视频处理成本，或光网络提高集群内数据/模型流动效率，可能改善数据处理效率；数据、权重、日志访问需在受控环境和合同中限制。

**投资/并购。** 建议战略 POC 和少数股权观察，不建议把尚在双产品线扩张的公司整体并购。触发投资的条件是：真实客户验收、软件迁移证据、PPA/TCO 可复现、供应链和长期服务可审计。若未来只收购能力，应优先考虑光子编译/校准、硅光封装和互联控制软件，而非盲目承担全部资本与系统业务。

| 优先级 | 验证事项 | 通过条件 |
|---|---|---|
| P0 | PACE 2 + 软件栈实测 | 我方模型能独立部署，端到端成本/能效有优势 |
| P0 | Photowave/Lightsphere 产品边界 | 明确拓扑、协议、部署尺度、供应和 SLA |
| P1 | 客户/订单/验收 | 区分计算与网络收入、复购和回款 |
| P1 | 光学可靠性与校准 | 温度、老化、故障、替换和监控可量产运维 |
| P2 | 数据安全与知识产权 | 权重、视频、日志和联合优化成果权属清晰 |

## 横纵交汇：为什么同一家公司会同时做计算卡和光网络

从纵轴看，光子计算的最难部分从来不是让光在芯片上完成一次矩阵运算，而是把这次运算嵌入服务器：输入如何调制、输出如何探测和量化、误差如何校准、模型如何映射、故障如何诊断。PACE 2 与 Gazelle 的意义正在于把这一条从器件到开发的链路变成可由客户测试的卡和评估平台。[PACE 2](https://www.lightelligence.ai/products/photon-computing/pace2)、[Gazelle](https://www.lightelligence.ai/products/photon-computing/gazelle)。历史上的“光计算研究”只有跨过软件、封装和板级工程，才会变成可采购产品。

从横轴看，AI 集群的瓶颈也在从单个计算芯片移动到互联、内存和拓扑。公司把 oNET、CXL 光互联和 dOCS 作为独立产品族，表明管理层并没有把光子的价值只押在计算矩阵上，而是在寻找更接近集群资本开支的收入入口。[官网](https://www.lightelligence.ai/)、[Photowave](https://www.lightelligence.ai/products/photon-network/photowave)、[Lightsphere X](https://www.lightelligence.ai/products/photon-network/wrapwave)。这一战略的潜在协同在于：同样的光子设计、封装、测试与系统客户可以服务两条线；其潜在冲突在于计算卡和网络产品的销售对象、认证周期、软件栈和竞争者不同，不能用一个技术故事替代两份产品损益表。

因此，投资尽调需要把“光电计算”和“光互联”分开建模。计算卡要看模型部署、每 token/每样本成本、精度与迁移支持；互联要看端口、距离、协议、可用性、拓扑与运维。两者可共享供应链，却不必共享收入节奏。若公司能把 Gazelle 的评估转成 PACE 2 规模部署，同时将 Photowave/Lightsphere 转成标准网络采购，双线会互相增强；若只停留在演示与定制工程，双线反而会加重现金和组织负担。

对机器人公司，这一交汇提供了有限但真实的战略选项。机器人数据中心可能需要大规模视觉日志、仿真与模型训练/蒸馏，因而可在云端测试光计算与光互联；机器人本体侧仍应使用成熟、低功耗、可维护的 CPU/NPU/GPU/MCU 分层架构。把数据中心光电系统直接等同于本体计算芯片，是错误的技术外推。

## 融资历史、合作网络、证据与冲突

### 融资/资本历史复核表

| 时间 | 事件 | 证据 | 结论 |
|---|---|---|---|
| 截至 2026-08-06 | 资本市场/IR 披露入口已建立 | [IR](https://www.lightelligence.ai/ir/investor-relations)、[上市文件](https://www.lightelligence.ai/ir/listing-documents) | 用最新文件核验融资、股权与财务；本报告不摘取未逐页复核数字 |
| 截至 2026-08-06 | 历史私募融资 | 媒体口径需与上市文件/股权表核验 | 不计算不一致的累计金额 |

### 合作网络（分列）

| 类型 | 已见公开边界 | 证据 | 待核验 |
|---|---|---|---|
| 投资方/股东 | 应以 IR/上市文件为准 | [IR](https://www.lightelligence.ai/ir/investor-relations) | 最新持股、锁定与关联交易 |
| 客户/订单 | 官网展示产品/方案但不以此披露完整客户清单 | [官网](https://www.lightelligence.ai/) | 合同、验收、收入、续购 |
| 产业合作 | 官网称与生态伙伴共同构建下一代计算基础设施 | [官网](https://www.lightelligence.ai/) | 合作方、排他、供货和技术责任 |
| 技术/联合研发 | 光计算、oNET、CXL、dOCS 与开发社区 | [技术页](https://www.lightelligence.ai/technical-advantage)、[社区](https://www.lightelligence.ai/community) | IP 归属、代码/器件来源 |
| 高校/科研渊源 | 需以公司介绍和公开论文逐项核验 | [公司介绍](https://www.lightelligence.ai/about-us/company-profile) | 学校授权、职务发明和持续关系 |

### 证据来源表

| 来源 | 用途 |
|---|---|
| [官网](https://www.lightelligence.ai/) | 主体、两条产品线、光网络说明 |
| [PACE 2](https://www.lightelligence.ai/products/photon-computing/pace2)、[Gazelle](https://www.lightelligence.ai/products/photon-computing/gazelle) | 光计算硬件与评估板 |
| [Photowave](https://www.lightelligence.ai/products/photon-network/photowave)、[Lightsphere X](https://www.lightelligence.ai/products/photon-network/wrapwave) | CXL 光互联与 dOCS 产品边界 |
| [IR](https://www.lightelligence.ai/ir/investor-relations)、[上市文件](https://www.lightelligence.ai/ir/listing-documents) | 资本/财务核验入口 |
| [CUDA](https://developer.nvidia.com/cuda-toolkit)、[TensorRT](https://developer.nvidia.com/tensorrt) | 横向软件生态基准 |

### 冲突与未确认事项

| 事项 | 当前处理 |
|---|---|
| 光计算产品是否已经成为主要收入承载物 | 官网证明产品存在，收入需以 IR/审计资料核验 |
| 光互联是 scale-up 还是 scale-out 主业务 | 由实际拓扑、端口、部署范围和收入合同裁决，不能按技术名称推定 |
| PACE 2 对各模型的性能/功耗 | 必须固定模型、精度、批量、主机和系统功耗复现 |
| 客户/生态伙伴关系 | “生态共建”不等于订单或排他关系 |

## 产业链分类复核

### 主二级分类：**1.4 其他 AI 芯片架构（光电混合/光子计算）**

当前唯一主类应为 **1.4**。理由是 PACE 2 光电加速计算卡和 Gazelle 评估板是公司明确、可访问的计算产品；其核心技术与价值创造首先来自光电混合计算，而不是图形 GPU、TPU 或常规 NPU。[PACE 2](https://www.lightelligence.ai/products/photon-computing/pace2)、[Gazelle](https://www.lightelligence.ai/products/photon-computing/gazelle)。但“主类”应随收入承载物变化复核：若审计披露证明光网络业务占绝对主导，应重新裁决。

### 次分类：**1.5 Scale-up 互联（有产品线证据，收入/部署待核验）；1.6 Scale-out 互联（仅条件性候选）**

Photowave 是 CXL 光互联硬件，按其节点/服务器资源扩展定位，最接近 **1.5 Scale-up 互联**，可列为次类但需核验实际商业收入和部署范围。[Photowave](https://www.lightelligence.ai/products/photon-network/photowave)。Lightsphere X 是分布式光路交换，若产品主要用于跨机架/数据中心 fabric，才应列 **1.6 Scale-out 互联**；官网产品定位本身不足以确认其主要收入或所有部署都属于 scale-out，因此将 1.6 标为条件性候选而非既成事实。[Lightsphere X](https://www.lightelligence.ai/products/photon-network/wrapwave)。

不应因为“硅光”同时赋予 1.5、1.6，亦不能将网络产品自动提升为主类。分类必须以实际产品交付和收入承载物裁决；截至截止日，公开产品边界已足以确认光电计算的主位，但不足以公开审计网络收入占比。

## 方法论说明

本报告按横纵分析法，从光电计算产品化、光互联延展到当前双产品线的竞争位置进行研究。关键原则是以官网的实际产品线纠正模板化“主体未知”错误，并把收入、客户、性能和互联部署边界保留为需要审计/POC 才能裁决的开放问题。

补充验收结论：本报告以 Lightelligence 官网的 PACE 2、Gazelle、Photowave、Lightsphere X、开发者社区与投资者关系入口为主体和产品依据，已删除“主体未知、教育品牌混淆、智能驾驶 GPU/NPU”这类不适用于曦智科技的模板化表述。仍保留的待核验项仅限收入、出货、客户、性能条件和互联部署范围，符合投资尽调应有的证据边界。

后续每次更新应优先读取最新 IR、上市文件与产品资料，确保公司主体、产品版本和实际商业化范围不被旧媒体或图谱条目替代。

这也是本次返修后分类裁决的唯一有效证据链。

光计算和光互联的主次关系应随审计后的收入结构持续复核。
不得静态固化。
