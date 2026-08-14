# Amazon Web Services（AWS）横纵分析报告

> 研究截止日：2026-08-11｜研究对象：Amazon Web Services, Inc.（以下简称 AWS；同时区分 Amazon.com, Inc. 的 AWS 报告分部）｜对象类型：超大规模云与 AI 基础设施服务商｜清单初始分类：1.2 TPU-like 张量 ASIC；1.5 Scale-up 互联通信

## 研究范围与结论先行

AWS 容易被写成两种都不完整的故事：要么是“出租 NVIDIA GPU 的云”，要么是“另一个 AI 芯片公司”。前者遗漏了其从 Nitro、Graviton、Inferentia、Trainium 到 Neuron 的长期定制硅和系统软件能力；后者则误把一项内部设计能力当成了 AWS 的主要收入承载物。可审计的事实是，AWS 的对外商品仍是一套按量/承诺计费的云服务——计算、存储、数据库、网络、数据和 AI 服务——客户通常购买实例、集群容量、托管模型接口与 SLA，而不是取得 Trainium 或 Inferentia 芯片的所有权。[S2][S3]

**一句话判断：**AWS 是以全球数据中心、云控制面、定制硅与 Neuron 软件栈降低特定 AI 负载成本，再用 SageMaker、Bedrock 和 EC2 把这种能力包装为可消费服务的超大规模平台；它的护城河是“云分发 + 资本开支 + 芯片/网络/软件协同”，而不是一颗可以单独出售或并购的 AI 芯片。[S2][S6][S7][S8]

对人形机器人公司，结论是：**采购/合作可做，投资或并购 AWS 本身不可做；Trainium/Inferentia 可以作为 GPU 的受控第二算力路径，但在完成 VLA、视频数据管线和自定义算子 POC 前，不应成为唯一训练或生产推理栈。**云上的 Bedrock/Claude 适合低风险研发、工具调用和企业功能验证；安全关键闭环控制、断网回退和现场数据治理应留在自有可审计系统中。

本轮成功标准是：

1. 分开记录 Amazon 母公司、AWS 报告分部、Amazon Web Services, Inc. 法人、Annapurna Labs、Anthropic 的资本和业务边界；
2. 分开记录“已可用服务/实例”“已宣布或按区域预览的产品”与“厂商性能主张”；
3. 不把 Amazon 的集团资本开支、Anthropic 的估值/融资或 AWS 分部收入归因给 Trainium/Inferentia；
4. 把机器人公司的动作落到可复现基准、合同条款、数据权属和供应连续性，而非“上云”这一抽象口号。

## 证据口径、主体与披露边界

| 等级 | 口径 | 本报告用法 |
|---|---|---|
| A | Amazon/SEC 申报、AWS 产品文档、AWS/Anthropic 直接公告 | 财务分部、组织/资本、产品可用性、接口和公开合作的承重事实 |
| B | 有署名的权威媒体、产业研究机构和客户技术材料 | 只补足收购背景、市场格局和开发者实践；不单独支撑交易结论 |
| C | GitHub issue、论坛和个人基准 | 用来形成 POC 问题，不用来给出统一性能或份额结论 |
| P | 本报告的推断 | 明确标注，供投资与采购讨论，不是 AWS 的披露 |

**主体边界。**任务清单给出的 Amazon Web Services, Inc. 是 Amazon 体系内法人。Amazon 的 10-K 中“AWS”则是按管理和财务披露定义的报告分部，覆盖全球向初创企业、企业、政府机构和学术机构销售的计算、存储、数据库及其他服务；它不等于单一法人，也不披露 Trainium、Inferentia、Bedrock 或单一客户的独立收入和毛利。[S2] 因此，本文以 Amazon Web Services, Inc./AWS 品牌与 AWS 分部的公开能力为研究对象，**只在引用分部数字时写“AWS 分部”，只在引用现金投资时写“Amazon”，绝不将二者互换。**

AWS 不是独立上市公司，未发现其独立融资轮、独立外部股东或单独 10-K。其资本承载是 Amazon.com, Inc. 的资产负债表、现金流和内部资本配置。Amazon 2025 年 10-K 披露，集团 2024、2025 年购买物业和设备的现金支出分别为 777 亿、1,283 亿美元，其中“多数”用于支持 AWS 增长；这证明 AWS 可获得非常大的集团级投入，**不**证明 AWS、Trainium 或某一数据中心分别得到多少资金。[S2]

## 纵向分析：从把零售基础设施外售，到把 AI 供应链内化为云服务

### 1. 起源：不是先有云愿景，而是先有被内部业务逼出的可复用基础设施（2000—2006）

Amazon 早期电商业务需要目录、订单、库存、支付和大量合作方系统持续演进。AWS 的官方起源叙述把这一过程描述为内部团队先把基础设施做成可被其他团队调用的服务，再意识到开发者也面临同样的“拿不到弹性计算和存储”的约束。[S1] 这一出身决定了 AWS 后来最强的产品观：把复杂的机房、虚拟化、网络、身份和运维藏在 API 后面，客户买到的不是设备，而是可被程序调用、可计量、可扩展的能力。

2006 年的 S3 和 EC2 是这个理念的外部化起点。S3 把对象存储做成按请求/容量付费接口，EC2 将可配置服务器容量以实例方式出租。今天回看，真正决定 AWS 路线的并非“最早提供 VM”这一单点，而是计费、账户、区域、可用区、身份、监控、合作伙伴和服务目录共同形成的控制面。客户越多，AWS 越能摊薄数据中心和软件投入；服务越多，客户迁移时需要替换的并不只是服务器，而是一整套权限、数据、网络和运营流程。

这也是人形机器人公司不能只按 GPU 单价评价 AWS 的原因。训练作业或许可迁出，摄像头数据湖、标注管线、仿真资产、日志、密钥管理、模型服务、车队/工厂系统与合规审计未必可以在同一成本下迁出。云带来的便利和锁定风险，来自同一件事：它把基础设施的责任收拢到一个控制面。

### 2. 云基础设施成为独立利润引擎：规模、区域与控制面的复利（2007—2014）

此阶段 AWS 从少数基础服务扩大到数据库、分析、网络、安全、开发工具和区域基础设施。其产品策略不是押注单一“杀手服务”，而是让一个账户能逐步消费更多托管能力。对于企业，迁移的第一步通常是存储或虚机，随后会延伸至数据库、IAM、网络、日志、容器和数据服务；由此形成较高的运维切换成本，但也让 AWS 可以将硬件迭代的复杂性留在云内。

财务上，AWS 后来被 Amazon 单独列作报告分部，显示其已不是附属实验。需要克制的是：Amazon 并不公开早期年度所有 AWS 财务细节，也不公开每一服务的收入、利用率、成本或客户合同；“AWS 很大”不能推导成任一产品线都有同等盈利能力。AWS 全球基础设施页面会持续更新 Region 与 Availability Zone 的总数，适合确认公开覆盖范围，却不应被用来推断某区域 AI 容量、GPU/Trainium 排队或中国业务可得性。[S17]

### 3. 2015 年的转折：Annapurna Labs 让 AWS 从采购硬件走向设计关键部件（2015—2018）

Amazon 在 2015 年收购以色列芯片公司 Annapurna Labs。公开报道常给出约 3.5 亿美元的价格，但 Amazon 未在本报告使用的一手材料中将其作为正式交易金额披露，因此只把“2015 年完成收购、其后成为 AWS 定制芯片能力来源”视作可使用结论，金额保留待原始并购文件复核。[S4]

这次收购的战略价值并不在于马上推出 AI ASIC。它先在数据中心控制面上开花：Nitro System 将传统虚拟化/管理功能从主机 CPU 剥离到专用硬件和软件组件，AWS 因而可以在隔离、性能和实例规格迭代之间更快权衡；官方将 Nitro 描述为 EC2 虚拟化、安全与网络能力的基础。[S5] 随后 Graviton 把 Arm CPU 引入 EC2，证明 AWS 可以把内部芯片设计、服务器、固件、编译器/发行版和按量计费产品一起交付。[S6]

这段历史非常关键。许多 AI 芯片公司从“完成一颗加速器”开始，随后才寻找板卡、服务器、驱动、客户和资金；AWS 是反向路径：先有全球机房、海量客户、运营系统和现金流，再把硅片塞进自己已掌控的交付管道。它不需要在公开渠道卖芯片来回收全部 NRE，而可将芯片收益体现在 EC2 定价、供给弹性、功耗和客户黏性中。

### 4. 从 Inferentia 到 Trainium：把 AI 芯片做成实例，而不是独立商品（2018—2022）

AWS 于 2018 年公布 Inferentia，随后以 Inf1 实例对外提供推理能力；Inf2 以第二代 Inferentia 延续该路线。官方产品资料将其定位为深度学习推理加速器，适配大模型、视觉和生成式 AI 等云端推理负载。[S7] 这里的商业边界很明确：客户可租用 Inf1/Inf2 实例、获得 SDK 与框架支持，但没有公开的“向客户出售 Inferentia 芯片、由客户在自有机房部署”的标准业务。

2020 年 AWS 公布 Trainium，目标是训练；Trn1 将多颗 Trainium、NeuronLink 和 Elastic Fabric Adapter（EFA）组合为训练实例/集群。EFA 是 AWS 面向 HPC 与机器学习的低时延、高吞吐网络接口能力；它能构成客户的训练系统体验，但并不代表 AWS 对外销售一项以互联芯片为主要收入承载物的独立业务。[S8][S10] 在这里，AWS 的真正产品化单元已经不是一张加速卡，而是“芯片 + 服务器 + 机架/网络 + 虚拟网络 + 调度 + 计量 + 支持”的云容量。

软件层的 Neuron SDK 与硬件同样重要。其公开组件包括 Neuron Runtime、编译器、框架集成、性能分析/监控工具和 Neuron Kernel Interface（NKI）。NKI 允许开发者为 Trainium/Inferentia 编写和调优内核，而不是只能把固定模型转成二进制；PyTorch Neuron、TensorFlow 和 JAX 的入口，以及 NeuronX Distributed 等分布式工具，使其具备实质的平台化特征。[S9][S11] 但也要承认差异：CUDA 多年积累的第三方库、工具、社区和跨云/自建硬件可移植性仍显著更广；“存在 Neuron”不能推导为任何 PyTorch/CUDA 项目零成本迁移。

### 5. 托管 ML 与生成式 AI：硬件从卖点变成更大产品栈的底层选择（2017—2024）

时间线上，SageMaker（2017）早于 Trainium：AWS 先用托管训练、部署、数据与 MLOps 降低 ML 运维门槛，再将自研加速器嵌入这些工作流。[S12] 这说明 AWS 并不要求所有客户理解芯片；对相当多企业，实例类型、模型端点、权限、成本控制和部署生命周期比加速器微架构更决定购买决策。

Bedrock 在 2023 年一般可用后，将多家基础模型、检索增强、guardrail、agent 等能力放入 AWS 控制面。[S13] 对 AWS 而言，它既是 GenAI 收入入口，也是一种需求汇聚器：客户可以从 API 开始使用模型，然后逐步使用存储、数据、身份、网络、微调和推理容量。对客户而言，这很便利，但应注意 Bedrock 的模型提供方、模型权利、区域、数据使用条款、版本变更和退出路径并不天然相同，不能因同在一个 AWS 账单上就视作同一技术供应商。

Amazon 与 Anthropic 的关系是这一策略最容易被误读的案例。2023—2024 年 Amazon 的公告称其对 Anthropic 投资最高至 40 亿美元的安排中，先投入 12.5 亿美元、后追加 27.5 亿美元，合计 40 亿美元；公告同时称 Anthropic 将 AWS 作为任务关键负载的主云，并使用 Trainium/Inferentia 建训部署模型。[S14] 但该公告不是 AWS 单独投资，也不是 Anthropic 向 AWS 采购的订单金额。

更晚的 Amazon 2025 年 10-K 提供了更严格的会计边界：从 2023 年第三季度到 2024 年第四季度，Amazon 向 Anthropic 的可转换票据实际投资为 53 亿美元；2025 年第二、四季度又分别投入 13 亿、14 亿美元的新可转换票据。部分票据已转换为**无投票权优先股**，文件还明确 Amazon 与 Anthropic 存在主要涉及 AWS 云服务及 AWS 芯片使用的商业安排。[S2] 这些是 Amazon 的金融资产与商业关系，不是 AWS 对 Anthropic 的控股、合并收入、独家订单或实际 Trainium 芯片使用量。报告中不能把其中任何一个数字写成 AWS 收入、AWS CapEx、Anthropic 融资总额或 Trainium 出货量。

### 6. Trainium2/3 与“规模化 AI 集群”叙事：系统承诺变大，外部可验证性反而更重要（2024—研究截止日）

AWS 目前产品页列出 Trainium 系列的 Trn1、Trn2、Trn3 实例，以及 Inferentia 的 Inf1、Inf2 实例。[S7][S8] 这些页面是“产品/服务存在”的强证据；型号在某一 Region 是否可立即订购、可获得的节点数、优惠后价格、故障域、框架版本与技术支持等级，则必须在采购时逐项取得书面确认。宣布、预览、名单列出和“可在 console 中看到”都不等于在目标地域有足够生产容量。

以 Trn2 为例，AWS 将多颗 Trainium2 和 NeuronLink 组合为更大训练/推理系统，并给出相对上一代的性能和性价比主张。[S8] 这些数字可作为厂商的规格与假设来源，不能与 NVIDIA、Google TPU 或自有 GPU 集群的独立测试直接相减。对 VLA/视频训练而言，真正需要比较的是数据读取、视觉/视频算子、混合精度收敛、通信、checkpoint、作业重试、调试人日和整个训练配方的有效吞吐，而非某个芯片峰值或标称 $/hour。

截至研究截止日，AWS 的 AI 路线已形成三层：底层允许同时租用 NVIDIA、AMD、Intel、Graviton、Trainium/Inferentia 等多种计算；中间层以 EFA、Nitro、VPC、存储、容器和调度承接集群；上层以 SageMaker、Bedrock 和行业解决方案吸收开发者。这套“多硬件、单控制面”策略使 AWS 的客户锁定并不依赖强迫客户使用自研芯片。自研芯片的作用更像成本/供给/议价和产品差异化杠杆。

### 7. 商业化、组织和资本：先看分部数字，再拒绝错误归因

Amazon 2025 年 10-K 披露，AWS 分部 2023、2024、2025 年净销售额分别为 907.57 亿、1,075.56 亿、1,287.25 亿美元，经营利润分别为 246.31 亿、398.34 亿、456.06 亿美元。[S2] 2026 年第二季度 10-Q 披露，该季度 AWS 分部净销售额为 422.32 亿美元、经营利润为 166.21 亿美元；上半年分别为 798.19 亿、307.82 亿美元。[S3] 这是 AWS 分部规模与盈利能力的可靠指标，却仍然**不是** Trainium、Inferentia、SageMaker、Bedrock、Anthropic、机器人或某个国家的收入/利润。

| 期间 | AWS 分部净销售额 | AWS 分部经营利润 | 正确解读 |
|---|---:|---:|---|
| 2023 | 907.57 亿美元 | 246.31 亿美元 | 云分部汇总，不拆分芯片/AI 服务 |
| 2024 | 1,075.56 亿美元 | 398.34 亿美元 | 同上；不可用以反推 Trainium 份额 |
| 2025 | 1,287.25 亿美元 | 456.06 亿美元 | 同上；AI 需求可能贡献增长，但无收入拆分 |
| 2026 H1 | 798.19 亿美元 | 307.82 亿美元 | 10-Q 半年数，非全年预测 |

CEO 组织也显示 AWS 在 Amazon 内部具有持续业务权重：Amazon 2025 年 10-K 记载 Matt Garman 自 2024 年 6 月起担任 AWS CEO；此前 AWS 由 Andrew Jassy 领导，Jassy 在 2021 年成为 Amazon CEO。[S2] 这有助于理解 AWS 的资源协调能力，但不能把个人任命解读为 AWS 从 Amazon 分拆，或把分部利润当作可独立分配的现金流。

## 产品、系统架构与已证实边界

| 层次 | 已公开且可验证的能力 | 形成的价值 | 需要保留的边界 |
|---|---|---|---|
| 定制硅 | Nitro、Graviton、Inferentia、Trainium | 把虚拟化、CPU 和 AI 负载的成本/性能优化纳入 AWS 自己的设计节奏 | AWS 不披露晶圆厂、HBM、封装、良率、芯片出货或单芯片利润 |
| 加速器实例 | Inf1/Inf2、Trn1/Trn2/Trn3 等 EC2 产品线 | 以租赁而非卖卡方式交付推理/训练能力 | 各区域容量、可用时间、实例拓扑和价格需要合同/console 核验 |
| 网络与集群 | EFA、NeuronLink、Nitro、VPC、存储、容器服务 | 将多芯片训练连接为云上集群体验 | 公开资料不等于客户可获得某一最大拓扑或独占网络 |
| 计算软件 | Neuron Runtime/Compiler、NKI、framework integrations、NeuronX Distributed、Profiler/Monitor | 为自研芯片提供框架入口和内核扩展能力 | 与 CUDA 的生态宽度、性能稳定性和迁移成本须按工作负载验证 |
| ML/GenAI 服务 | SageMaker、Bedrock、模型/agent/RAG 等托管能力 | 降低模型运营门槛，扩大云服务消费面 | 托管 API 的模型权属、训练数据、区域、版本/SLA 与底层芯片并非同一合同事实 |

### Neuron 是否是“加速计算平台”？

按本库 `2.1` 的准入标准，Neuron 达到平台化门槛：有跨代持续的命名 SDK；公开资料显示运行时、编译器、框架后端、分布式库、性能工具；NKI 提供自定义 kernel 扩展；AWS 同时提供 SDK、文档、容器/示例和实例产品。[S9][S11] 初步评分为 **91/100**（软件栈完整度 38/40、可编程扩展 19/20、工作负载广度 13/15、开发者产品化 13/15、多代/集群部署 8/10）。该评分只说明“平台结构成立”，不声称其在生态、性能或稳定性上等同 CUDA。

## 融资/资本史与合作网络（按关系类型拆分）

### 融资与资本配置历史

| 时间 | 事件 | 金额/口径 | 研究含义 | 证据 |
|---|---|---|---|---|
| 2006—至今 | AWS 作为 Amazon 内部业务/后来的报告分部发展 | 未见 AWS 独立对外融资或独立上市 | 不应把它当普通一级市场公司估值、融资或设计投资条款 | [S1][S2] |
| 2015 | Amazon 收购 Annapurna Labs | 交易金额在本报告一手材料中未确认；媒体常见“约 3.5 亿美元”仅作待复核线索 | 获得定制芯片组织能力，不等于买到今天所有 AI IP 的完整权属清单 | [S4] |
| 2024—2025 | Amazon 集团购买物业和设备 | 2024 年 777 亿、2025 年 1,283 亿美元；10-K 称多数用于 AWS 增长 | 是集团 CapEx，不能拆到 AWS 法人、数据中心、Trainium 或机器人项目 | [S2] |
| 2023Q3—2025Q4 | Amazon 对 Anthropic 的可转换票据/优先股相关投资 | 10-K 所列 2023Q3—2024Q4 53 亿美元；2025 年新票据 13 亿 + 14 亿美元 | Amazon 的金融投资，不是 AWS 融资、AWS 对外并购或 AWS 收入 | [S2] |

### 投资方/股东与资本关系

| 对手方 | 关系 | 可确认事实 | 明确不应推出的结论 | 证据 |
|---|---|---|---|---|
| Amazon.com, Inc. | 母公司/资本提供者 | AWS 是 Amazon 的报告分部；Amazon 以集团资产负债表投入基础设施 | AWS 有独立 VC 股东、可被小股权投资控制，或其分部利润可独立分配 | [S2] |
| Annapurna Labs | 被 Amazon 收购的芯片团队/能力来源 | 2015 年并入 Amazon，后续成为 AWS 定制硅路线的重要组织线索 | Annapurna 仍是独立供应商，或公开披露其对 Trainium 的全部 IP/人员归属 | [S4] |
| Anthropic, PBC | Amazon 的被投公司及 AWS 商业伙伴 | 票据/无投票权优先股与云服务安排均见 10-K/公告 | AWS 控制 Anthropic、Anthropic 是 AWS 子公司、其融资/估值可并入 AWS | [S2][S14] |

### 客户、订单与容量关系

| 对手方 | 已确认关系 | 不能写成的结论 | 证据 |
|---|---|---|---|
| Anthropic | AWS 被公告为其任务关键负载的主云；公告称其会使用 Trainium/Inferentia | 未披露的训练卡时、付费金额、独占期限、芯片数量、模型全量部署占比 | [S14][S2] |
| AWS 其他企业/开发者客户 | AWS 分部向初创、企业、政府和学术机构销售云服务 | 某行业客户使用 AWS 即等于使用 Trainium/Inferentia，或存在公开“订单” | [S2] |
| Amazon 自身业务 | Amazon 内部是 AWS 及其基础设施的重要需求来源 | 内部服务消耗可视作对外收入，或能由分部报表反推各芯片利用率 | [S2] |

### 产业合作与供应生态

| 对手方/类别 | 已确认关系及战略意义 | 边界 | 证据 |
|---|---|---|---|
| NVIDIA、AMD、Intel 等 | AWS 同时提供多种第三方计算实例；这使 AWS 可用“多硬件、单控制面”服务客户 | 产品共存不披露 GPU/CPU 采购量、供货价格、优先供给或任何一方对 AWS 的控制权 | [S6][S8] |
| Anthropic | 模型、云、定制芯片使用与 Amazon 投资形成复合关系 | 投资、云服务、模型上架和训练使用必须逐项拆开；不存在已披露的 AWS 控股 | [S2][S14] |
| AWS Partner/ISV 生态 | 伙伴可在 AWS 上部署工具和服务，扩展客户覆盖 | partner 名单不是订单、联合研发、独家授权或真实部署清单 | [S1][S17] |
| 数据中心供应链 | AWS 自建/租赁数据中心需服务器、网络、存储、供电和散热 | Amazon 未公开完整代工、HBM、封测、光互联、液冷 BOM 与锁量；不填补具体供应商 | [S2][S17] |

### 技术/联合研发与高校/科研渊源

| 来源/伙伴 | 关系 | 对路线的意义 | 证据/边界 |
|---|---|---|---|
| Annapurna Labs | 收购形成的内部芯片研发来源 | 解释 Nitro/Graviton/Inferentia/Trainium 的组织连续性 | [S4]；不等于已披露每一代芯片的完整设计谱系 |
| AWS Neuron 团队与开源框架社区 | 对 PyTorch、TensorFlow、JAX 等提供集成，NKI 提供扩展接口 | 是自研芯片可被外部开发者使用的关键接口 | [S9][S11]；框架支持不保证所有算子/版本完备 |
| Anthropic | 围绕云、模型和 AWS 芯片的商业/技术协作 | 为 Trainium 大规模负载提供强需求牵引 | [S14]；不把商业协作称作共同发明或 IP 共有 |
| 高校/科研机构 | AWS 面向学术机构销售服务 | 本轮未发现可将 Amazon Web Services, Inc. 核验为某一高校实验室直接孵化、或与某高校共同持有 Trainium 核心 IP 的充分一手证据 | 这是“未确认”，不是“没有科研合作” |

## 横向分析：AWS 的直接对手不是一颗芯片，而是四种替代路径

### 1. 竞争场景

这是竞品充分的场景。客户实际在选择的通常不是“Trainium versus TPU”的裸芯片，而是：留在 AWS 的多硬件云控制面、进入 Google 的 TPU/Vertex 体系、进入 Azure 的企业控制面和 GPU/自研芯片组合、购买 Oracle OCI/NVIDIA 等高密度 GPU 容量，或使用 CoreWeave 等 GPU 专业云；大型客户还可自建 NVIDIA/AMD 集群。NVIDIA 在此既是 AWS 的重要供给/产品生态组成，也是 AWS 自研 ASIC 在预算层面要替代的技术平台，不能简单贴成单一“竞品”或“供应商”。

| 维度 | AWS：Trainium/Inferentia + Neuron + 云 | Google Cloud TPU | Microsoft Azure | Oracle OCI / GPU 专业云 | 自建 NVIDIA/AMD 集群 |
|---|---|---|---|---|---|
| 客户买到什么 | 多硬件云容量、控制面、托管 ML/模型服务 | TPU Pod/VM、Vertex 与 Google 模型生态 | 企业云控制面、GPU/自研加速器与微软软件生态 | 高密度 GPU 容量、网络/托管服务 | 资产、网络、软件和运维控制权 |
| 自研硅角色 | 以云实例交付的成本/供给差异化 | TPU 是云 AI 计算的核心差异化 | 自研芯片与第三方 GPU 并行，企业控制面更显著 | 以 NVIDIA/AMD 等第三方加速器为主 | 主要依赖外购硬件 |
| 软件入口 | Neuron、SageMaker、Bedrock、EKS | XLA/JAX、PyTorch/XLA、Vertex | Azure ML、AKS、企业身份/数据控制面 | CUDA/主流框架及各自控制面 | CUDA/ROCm 与客户自管栈 |
| 最强位置 | 服务广度、既有 AWS 账户、定制硅和多硬件选择 | 内部模型+TPU+云的纵向协同 | 企业分发、安全身份和 Microsoft 产品生态 | GPU 获得、特定大客户集群与商业灵活性 | 数据主权、可预测的长期控制 |
| 核心短板 | AWS 锁定、Neuron/CUDA 迁移和区域容量透明度 | 硬件不可自持、工具迁移成本 | 自研加速器透明度/可得性、GPU 依赖 | 云服务广度、客户/供给集中或规模风险各异 | 前置 CapEx、运维人才和供电/网络周期 |

### 2. Google Cloud TPU：最相似的“内部 ASIC 外租”路线

Google 与 AWS 的相似之处比表面更多：两者都有长期内部大规模负载、定制芯片、数据中心、网络和云控制面，客户买到的都是托管容量而不是板卡。两者也都有专门的编译/运行时路线，因而都不能用“理论峰值”替代训练配方实测。

差别在于历史牵引。TPU 与 Google 的搜索、广告、Gemini/DeepMind、JAX/XLA 路线耦合更深；AWS 的路线则更像把多种硬件放在同一控制面，由 Neuron 为自研 ASIC、由 CUDA 等为第三方 GPU 提供并行入口。对一个数据与生产系统已经在 AWS 的机器人公司，改用 Trainium 可能只改变实例和部分训练栈；迁往 TPU 则还会改变云控制面和模型/编译器生态。反过来，若项目与 Google DeepMind/Gemini Robotics 有实质研发协同，TPU/Google Cloud 的系统价值更强。两种选择都不能从厂商宣称的性价比直接推出。[S7][S8][S9]

### 3. Microsoft Azure：硬件之外，企业控制面和模型关系可能决定胜负

Azure 同时提供 NVIDIA/AMD 等资源、发展自研加速器，并借助 Microsoft 的身份、安全、开发工具、Office/Windows/GitHub/企业销售体系吸收 AI 工作负载。对机器人公司，若核心客户是已有 Azure 治理、数据驻留、OT/IT 集成与企业采购框架的大型制造企业，Azure 的选择理由往往不是某颗芯片，而是合规、销售和运营摩擦较小。

AWS 的优势是服务宽度、成熟的云原生控制面以及 Trainium/Inferentia 的专用化路径；短板是企业客户若已深度 Microsoft 化，迁移到 AWS 的组织成本可能抵消算力层优化。正确的比较指标应是从摄像头数据进入、训练、评测、部署、审计到现场回退的完整链路，而不是单机时薪。Azure 与 OpenAI、其他模型公司和自研芯片的关系必须另案按日期核验，不能挪用到 AWS/Anthropic 的所有权或采购结论中。

### 4. Oracle OCI、CoreWeave 与 GPU 专业云：把“可用 GPU”当作商品的替代方案

Oracle OCI 和 GPU 专业云的吸引力通常是某一时期的大规模 GPU 可得性、网络拓扑、合同灵活性或客户专属部署。它们对 AWS 的压力是真实的：当客户的训练栈高度 CUDA 化、模型/数据已冻结且最稀缺资源是 GPU 容量时，专门云可以降低获得计算的时间。

但 AWS 的反击不需要让 Trainium 完全替代 GPU。它可以同时提供 GPU 实例、存储、网络、容器、数据库和企业服务，再以自研芯片争取其中适合迁移的训练/推理负载。对机器人公司，这意味着不要将 AWS 与“非 GPU”画等号：应在同一 AWS 账户内比较 GPU、Trainium 与 Inferentia，也要与外部云报价比较，从而保留议价权。GPU 专业云的客户集中、供应承诺、长期价格、数据迁出和服务广度需要单独尽调，不能因为某份容量新闻就认定它优于 AWS。

### 5. 自建 NVIDIA/AMD：AWS 最难完全替代、也最该被保留的控制样本

自建集群的优势不是天然更便宜，而是模型、数据、网络、调度、硬件替换和故障处理的控制权更强。对于持续高利用率、数据不能离开、对网络/功耗/时间确定性要求高的工作负载，自建或专属托管能够成为云报价与迁移风险的现实约束。代价是前置设备、供电、散热、互联、备件、运维和人才投入，以及硬件代际的资产风险。

AWS 历史上的胜利恰在于把这些麻烦折进 API 和按量计费；机器人公司仍应保留一套能在非 AWS 环境复现核心训练与推理的“控制样本”。这不是为了马上自建全部基础设施，而是防止 Bedrock API、数据格式、Neuron kernel、云上 checkpoint 或 IAM 规则变成无法退出的隐性接口。

### 6. 生态位结论

AWS 的生态位不是“通过 Trainium 打败 NVIDIA”，而是用自研芯片给自己的云经济模型增加一根杠杆：当客户可迁移时，Trainium/Inferentia 提供成本和供应选择；当客户暂时不能迁移时，GPU 与广泛服务目录保留其在 AWS；当客户只要模型能力时，Bedrock 把底层复杂度再向下隐藏。这个结构比单纯芯片公司更耐资本周期，但也让外部客户更难看清哪一层带来真实成本优势。

## 横纵交汇洞察与三种剧本

### 历史如何塑造当下位置

AWS 从 2006 年以来反复做的是同一件事：先把 Amazon 内部已经存在的复杂系统抽象为服务，再将规模带来的成本优势返还给更多客户。S3/EC2 解决的是服务器和存储的获取；Nitro/Graviton 把控制权下沉到硬件；Inferentia/Trainium 将这套方法扩展到 AI 计算；Neuron、SageMaker 和 Bedrock 再把硬件选择向开发者隐藏。AWS 今天能与 TPU 或 GPU 专业云竞争，不是因为某一代芯片参数，而是因为它已把“芯片失败、升级、网络、账户和计费”变成同一家公司可协调的问题。

这条历史也制造了结构性弱点。内部协同很深，却不必然等于外部开发者体验最佳；越多能力进入 AWS 控制面，客户越需要投资可迁移性；而 Amazon 不披露芯片收入、可用容量或供应链细节，会使客户很难只靠公开信息验证长期 TCO。AWS 的最强护城河和客户的主要风险，都是控制面集中。

### 优势与劣势的历史根源

| 当下特征 | 历史根源 | 对人形机器人公司的含义 |
|---|---|---|
| 多硬件而非单一 GPU 的供给能力 | 早期云服务目录、Nitro/Graviton 与后续定制硅 | 可建立 GPU/Trainium/Inferentia 的可切换池，不必把 AWS 等同单一路线 |
| 自研 AI ASIC 可持续迭代 | Annapurna 收购后与数据中心/实例交付协同 | 不应把无系统能力的单芯片创业公司简单类比为 AWS |
| Neuron 具有真实扩展接口 | 硬件产品化必须服务外部框架和客户 | 迁移可行但有工程成本，应以自有 kernel/模型 POC 验证 |
| Bedrock/SageMaker 降低接入门槛 | AWS 一贯将复杂基础设施抽象为托管服务 | 研发快，但要独立审查模型权属、版本与数据边界 |
| 透明度有限 | 收入按云分部、硬件以服务交付、集团统筹 CapEx | 采购前要索取区域/容量/SLA/退出条款，不能靠宣传建财务模型 |

### 三个剧本（P：研究者推演）

| 剧本 | 触发条件 | AWS 的可能位置 | 机器人公司的应对 |
|---|---|---|---|
| 最可能：多加速器云长期共存 | CUDA 惯性仍强；推理成本上升；大客户追求第二源 | AWS 同时扩大 GPU 与自研 ASIC，Neuron 在部分可迁移训练/推理负载中提高份额 | GPU 保持主生产路径之一；每半年拿冻结 VLA/视频工作负载跑 Trainium/Inferentia 与 GPU 基准 |
| 最危险：云控制面锁定掩盖了迁移成本 | 为折扣或 API 便利深绑 Bedrock、SageMaker、私有格式或 NKI | 短期开发速度提升，长期切换成本和区域/价格风险上升 | 数据、checkpoint、评测和部署接口保持可导出；合同中写入价格、容量、迁出和模型变更条款 |
| 最乐观：AWS 芯片+模型伙伴形成稳定成本曲线 | Neuron 对主流 VLA/视觉算子成熟；目标 Region 容量可预留；Anthropic/其他模型能力与机器人工作流匹配 | AWS 成为训练/推理的可信第二池和企业 AI 交付平台 | 用非独家多年容量/技术支持协议换取折扣；仍保留非 AWS 训练与端侧安全栈 |

## 面向人形机器人公司的行动建议

| 决策对象 | 建议动作 | 理由 | 风险、触发条件与下一步验证 |
|---|---|---|---|
| AWS 股权/并购 | **不建议作为常规投资或并购对象** | AWS 是 Amazon 体系内核心分部/法人，外部难以取得控制权或形成与规模相称的治理权 | 若未来出现可独立交易的软件团队、区域资产或供应链标的，另案核验 IP 与控制权；不可将云采购关系包装成并购机会 |
| Trainium 训练 | **建立受控 POC 和第二容量池，不立即替换 GPU 主栈** | 可能提供训练成本/供给的替代，且 Neuron 已有可编程接口 | 6—8 周冻结数据、模型、精度、global batch、预算和区域；比较收敛、样本吞吐、墙钟、失败重试、工程人日、总账单和迁出成本 |
| Inferentia 云端推理 | **针对批量/异步多模态推理做单独 POC** | Inferentia 的价值可能更集中在特定吞吐、成本和延迟区间 | 测 P50/P95/P99、冷启动、模型版本、量化精度、视频/视觉前后处理、限流与故障恢复；不能用 LLM token 基准外推到 VLA |
| Bedrock/Anthropic | **用于研发、客服/知识库、非安全关键 agent；采用可替换适配层** | 访问多模型和 AWS 治理能力便利，Anthropic 有已公告的 AWS 商业关系 | 不将 Anthropic 股权关系误作服务 SLA；明确数据不训练、模型版本、跨境、日志、IP、赔偿、调用价格与退出；不让云 API 直接驱动安全关键执行器 |
| 生产数据与机器人控制 | **保持自有数据平面、边缘最小功能和跨云复现能力** | 人形机器人须处理断网、低延迟、隐私、工厂/家庭现场故障 | 建立端云切分：端侧安全控制/回退、云端训练和高价值推理、全链路日志回放；每季演练云服务不可用与迁出恢复 |
| 投资与自研 | **优先投资可跨 XPU 的训练/推理迁移、编译/算子、数据/仿真和端云调度；谨慎复制超大规模云 ASIC** | AWS 的壁垒来自资本、供应、全球运营和控制面协同，单一 ASIC 很难复制 | 投资门槛为：真实客户、开发者接口、可在至少两类硬件复现、明确 IP/代工/封装供应与机器人负载证明；自研芯片仅在稳定、可量化的端侧/专属负载出现后评估 |

建议的采购验收门槛不是“Neuron 能否编译”，而是：①同一机器人训练配方能否在 GPU 与 Trainium 上复现目标指标；②迁移工程时间是否小于预期节省；③Region、实例、网络和支持容量能否覆盖项目时间表；④数据与 checkpoint 是否无损导出；⑤云 API 中断时机器人能否安全降级；⑥合同能否限制成本上调、模型变更和数据二次使用。

## 证据/来源核验表

| 编号 | 结论/事实 | 来源 | 等级 | 使用边界 |
|---|---|---|---|---|
| S1 | AWS 起源、服务定位和历史叙述 | [AWS Our Origins](https://aws.amazon.com/about-aws/our-origins/) | A | 官方叙述可确认历史定位，不替代财务/技术基准 |
| S2 | AWS 分部收入/利润、分部定义、Amazon CapEx、Anthropic 会计处理与管理层 | [Amazon 2025 Form 10-K（2026-02-06）](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm) | A | 分部数和集团会计口径；不拆分单服务/芯片 |
| S3 | 2026Q2 AWS 分部销售/利润 | [Amazon 2026Q2 Form 10-Q（2026-07-31）](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000026/amzn-20260630.htm) | A | 截至 2026-06-30 的期间数据，非全年预测 |
| S4 | Annapurna Labs 并购背景 | [Reuters：Amazon buys Israeli chip maker Annapurna Labs for $350 mln, media report（2015）](https://www.reuters.com/article/world/amazon-buys-israeli-chip-maker-annapurna-labs-for-350-mln-media-idUSKBN0KW1SZ/) | B | 用于收购时间线；“约 3.5 亿美元”未经本报告一手文件确认 |
| S5 | Nitro System 的定位与组成 | [AWS Nitro System](https://aws.amazon.com/ec2/nitro/) | A | 官方产品说明，不披露全部硬件 BOM |
| S6 | Graviton/多硬件 EC2 路线 | [AWS Graviton](https://aws.amazon.com/ec2/graviton/) | A | 证明 CPU 产品线与服务方式，不反推芯片财务 |
| S7 | Inferentia、Inf1/Inf2 产品与适用范围 | [AWS Inferentia](https://aws.amazon.com/machine-learning/inferentia/)；[Inf1](https://aws.amazon.com/ec2/instance-types/inf1/)；[Inf2](https://aws.amazon.com/ec2/instance-types/inf2/) | A | 官方规格/可用性需按 Region 复核 |
| S8 | Trainium、Trn1/Trn2/Trn3 实例与厂商性能主张 | [AWS Trainium](https://aws.amazon.com/machine-learning/trainium/)；[Trn1](https://aws.amazon.com/ec2/instance-types/trn1/)；[Trn2](https://aws.amazon.com/ec2/instance-types/trn2/)；[Trn3](https://aws.amazon.com/ec2/instance-types/trn3/) | A | 是发布/产品证据，不是第三方 TCO 结论 |
| S9 | Neuron runtime/compiler/framework/NKI 软件栈 | [AWS Neuron Documentation](https://awsdocs-neuron.readthedocs-hosted.com/en/latest/)；[NKI](https://awsdocs-neuron.readthedocs-hosted.com/en/latest/nki/index.html) | A | 证明接口存在，不证明任意模型性能/兼容 |
| S10 | EFA 的 HPC/ML 网络能力 | [AWS Elastic Fabric Adapter](https://aws.amazon.com/hpc/efa/) | A | 不能单凭此认定 AWS 的核心商品为独立互联设备 |
| S11 | PyTorch Neuron/NeuronX 等框架与分布式入口 | [AWS Neuron Framework Documentation](https://awsdocs-neuron.readthedocs-hosted.com/en/latest/frameworks/index.html) | A | 各版本/算子需项目级验证 |
| S12 | SageMaker 托管 ML 平台 | [Amazon SageMaker](https://aws.amazon.com/sagemaker/) | A | 证明产品存在，非某个模型/芯片收入 |
| S13 | Bedrock 产品与生成式 AI 服务入口 | [Amazon Bedrock](https://aws.amazon.com/bedrock/)；[Bedrock GA 公告](https://aws.amazon.com/blogs/aws/amazon-bedrock-is-now-generally-available-build-and-scale-generative-ai-applications-with-foundation-models/) | A | 模型可用性、区域及条款以具体服务页面/合同为准 |
| S14 | Amazon/Anthropic 的 40 亿美元公告、主云和芯片使用表述 | [Amazon completes $4B Anthropic investment](https://www.aboutamazon.com/news/company-news/amazon-anthropic-ai-investment)；[Anthropic partnership announcement](https://www.anthropic.com/news/anthropic-amazon) | A | 只确认公告范围；以 S2 会计数校验后续金额与所有权边界 |
| S17 | AWS 全球基础设施公开覆盖 | [AWS Global Infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/) | A | 总数随页面更新；不代表目标 Region AI 容量 |

## 冲突与未确认事项

| 事项 | 支持证据 | 反向证据/缺口 | 对结论的影响与下一步 |
|---|---|---|---|
| Anthropic 投资“总额”口径 | 2024 Amazon 公告写合计 40 亿美元；2025 10-K 列示 53 亿美元旧票据与 27 亿美元新票据现金投资 | 公告承诺、投资实际支付、票据转换、公允价值和媒体常说的累计数字并非同一口径 | 投资模型只采用 10-K 的日期/工具/现金流叙述；向法务索取权利、转换和商业承诺，不把任一数作 AWS 收入 |
| Trainium/Inferentia 的真实外部规模 | 多代实例、Neuron、Anthropic 安排与持续发布证明重要性 | 未披露收入、客户数、租用小时、芯片出货、利用率、成本和利润 | 不做“自研芯片市占/收入”预测；采购谈判中索取目标 Region 的实际容量、价格、支持与故障数据 |
| Trn2/Trn3 的目标区域可得性与成熟度 | 官方产品页列出相关实例 | 页面/公告不等同所有区域可订购、配额足够或框架版本稳定 | 在 POC 前获取书面规格、Region、配额、预留容量、SLA、维护/升级通知 |
| Neuron 相对 CUDA 的 TCO | 有 compiler/runtime/NKI/框架入口；厂商给出性能主张 | 不同模型、精度、批量、算子、网络、优惠和工程时间差异极大，公开独立可比数据有限 | 用同一 VLA/视觉/视频配方盲测；记录工程人日和失败成本而不只看实例小时 |
| AWS 对 Anthropic 的控制权 | 10-K 记载无投票权优先股/票据与商业安排 | 无证据支持 AWS/ Amazon 控制或合并 Anthropic | 所有模型供应、数据权属和 SLA 直接与模型提供方/合同核验；不将其当 Amazon 内部模型 |
| 中国及跨境机器人业务可持续性 | AWS 有全球基础设施和多区域服务 | 公开页面不能替代地区可售服务、数据跨境、出口管制、模型访问与本地支持审查 | 启动前由法务/合规核验目标主体、数据类别、区域、子处理者、出口与政府客户限制；保留本地回退 |

## 产业链分类复核

**主分类：8 其他（超大规模云/AI 算力服务），高置信。** AWS 的主要价值创造和已披露收入承载物是向各类客户出售全球计算、存储、数据库及其他云服务；AWS 分部以云服务整体披露收入与利润，而非出售 AI 芯片、互联设备或集群总包工程。[S2] 它确实拥有定制硅和 AI 平台，但客户的直接购买理由仍是云容量、控制面与托管服务。因此不应因 Trainium/Inferentia 的技术存在，把 AWS 主分类改写为 1.2、1.3 或 1.5。

**正式次分类 1：1.3 NPU（ASIC），中高置信。** Inferentia/Trainium 是 AWS 自研的 AI 训练/推理专用 ASIC，并以 Inf/Trn 实例对外商业化。[S7][S8] 次分类反映真实的核心技术优势；同时保留“仅云服务交付、非独立卖芯片”的边界，不以 AWS 分部收入反推 ASIC 收入。这里不采用 `1.2 TPU（ASIC）`：AWS 的公开产品是 Trainium/Inferentia 与 Neuron 的自有路线，不能因其同属张量加速器就混同为 Google TPU 的产品/软件体系。

**正式次分类 2：2.1 加速计算平台（CUDA-like），高置信。** Neuron 已公开具名 SDK、runtime、compiler、框架后端、分布式库、profiling/monitoring，以及 NKI 自定义内核接口，并与多代 Inferentia/Trainium 实例实际交付，达到本库 `2.1` 的硬条件和 70 分门槛。[S9][S11] 此标签表示其具有可持续的平台化能力，**不**表示生态规模或迁移体验等同 CUDA。

**不列正式次分类 1.5 Scale-up 互联通信。** EFA 与 NeuronLink 对大规模训练很关键，但 AWS 对外的收入承载物是实例/云集群服务，客户并非主要购买一项可独立计价、以带宽/端口/协议为经济核心的互联产品；公开材料也不足以把其云内网络能力等同为独立 Scale-up 互联供应商。[S8][S10] 同理，不列 `3.3 算力中心集成`：AWS 是自营超大规模云服务商，非以客户项目总包交付为核心收入的算力中心集成商。
