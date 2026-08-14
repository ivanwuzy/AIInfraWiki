# Accelsius（研究指定主体：Accelsius Holdings LLC）横纵分析报告

> Source: 本地文件 `横纵研究报告/Accelsius_横纵分析报告.md`
> Collected: 2026-08-11
> Published: Unknown

> 研究截止日：2026-08-11 ｜对象类型：AI/HPC 数据中心两相直连芯片液冷系统 ｜主体核验状态：任务清单指定 Accelsius Holdings LLC；公开一手材料主要使用 Accelsius LLC 品牌/实体，二者关系待交易前终核

## 结论先行

Accelsius 的价值不在于销售一台普通 CDU，也不在于替代数据中心总包。它试图把**非导电介电工质、两相相变、芯片级 cold plate、机架/行级分配、监控和现场服务**组合成 NeuCool 平台，以解决 AI/HPC 芯片功耗持续上升时风冷和单相水冷的热通量、漏液、用水与设施水温约束。公司称其由 Innventure 于 2022 年成立；公开公司页和网站页脚使用 **Accelsius LLC**，而非任务清单所给的 Accelsius Holdings LLC，因此本报告不能将二者静默视为同一法定主体。[S1]

对人形机器人公司而言，Accelsius 是一个值得跟踪的**高密度云端训练/仿真机房冷却供应商候选**，尤其在计划建设或改造北美高功率 GPU 集群、希望提高设施水温并降低水处理依赖时。当前建议是 **P0 技术/工程尽调、P1 试点采购观察；不作财务投资或并购立项**。原因不是技术没有吸引力，而是其很多关键证据仍属于公司测试、Kickstart 试点、演示/联合创新设施或未来部署协议，尚不足以验证批量交付、长期可靠性、系统级 PUE/TCO、毛利与大规模售后能力。

产业链主分类应为 **`3.2 数据中心散热`（高置信）**。NeuCool 的核心是 chip-to-facility thermal path 的冷却设备和工程服务，直接创造的价值是热量移除、能耗/用水约束缓解和高密度机柜可部署性。公司虽与 Johnson Controls、Legrand、数据中心、服务器和系统集成方合作，但公开材料没有显示其承担数据中心电力、土建、网络、机柜和全设施交付的主责，故不以 `3.3 算力中心集成` 作为次分类。[S8][S9]

## 一、研究边界、主体与证据标准

### 1.1 研究对象与法定主体的分歧

任务清单将研究主体列为 **Accelsius Holdings LLC**。但官网公司页写明公司由 Innventure 在 2022 年形成，网页页脚为“© 2026 Accelsius LLC”；公开融资、产品、合作公告也均仅以“Accelsius”或“Accelsius LLC”表述。[S1][S3] 在未取得州公司登记、集团组织架构、IP 许可链、融资文件和客户 MSA 前，不能把 Holdings LLC、Accelsius LLC、Innventure 或任何 SPV 的资产/负债/合同混为一体。

因此，本报告把“Accelsius”作为商业与技术品牌进行研究，同时把 **Accelsius Holdings LLC 与 Accelsius LLC 的关系**列入重大待验证事项。凡涉及融资、订单、专利、保修、生产设施和收购标的的结论，均须先解决该实体边界。

### 1.2 什么能够、不能够由公开资料证明

- 公司产品页和新闻稿可证明其公开产品、架构主张、融资公告、合作或协议已被发布；不能自动证明客户收入、已安装数量、续约、交付进度或实际节能。
- TACC 的公告明确称其为 Kickstart 的 strategic proof-of-concept customer；Equinix、Computacenter、Nordik 的材料涉及创新/展示/测试环境。这些均不可提升为全面商业化客户或大规模收入证据。[S5][S6][S11][S12]
- DarkNX 公告是对 300MW 园区的 **agreement to deploy**，首阶段两座 65MW 设施计划于 2026 和 2027 部署；不是截至本报告日已经完成的 300MW 安装或已确认收入。[S13]
- 所有“可省多少能耗”“可支持多少功率”“无风险/可规模化”等性能与经济数字，除非另有独立测试和客户运营数据，否则都应按供应商测试或营销口径对待。[S3][S15]

## 二、纵向分析：从商业化平台孵化，到两相直冷的规模化赌注

### 2.1 2022：不是传统制冷厂出身，而是技术商业化项目

Accelsius 的起点是 Innventure 的商业化框架。官网称 Accelsius 在 2022 年形成，用既有热科学研究开发并商业化一套可维护、可扩展、可恢复的冷却系统；团队覆盖研发、供应链、工程与服务。[S1] 这解释了公司早期路线：并未从空调机组、机房承建或云租赁入手，而是选择两相直连芯片（two-phase direct-to-chip, 2P D2C）这一高技术密度的组件—系统交界面。

这一选择带来两个结构性后果。其一，护城河若存在，更可能来自冷板、流体回路、歧管、工质、控制/监控、制造工艺和现场服务的整体匹配，而不是一项单独的“液冷概念”。其二，商业化门槛极高：客户必须相信它在长期泄漏、维护、换代 GPU、供应链、保险和设施兼容性上都可接受。数据中心冷却产品不会像 SaaS 一样轻易试用后切换，它的销售周期、验证成本和售后责任都很重。

### 2.2 2023：Kickstart 把实验室技术带入客户设施，但仍明确是 field trial

2023-12，公司推出 NeuCool Kickstart，定义为两相直连芯片系统的**专属现场试用**：向数据中心运营商提供定制化系统机架，在客户设施中测试和评估；参与者与其现场工程师和热科学团队共同部署、commission，并持续反馈性能以改善后续产品。[S18] 这段描述非常重要，因为它直接说明早期市场验证的性质。

Kickstart 并非负面信号。对于需要改变机房水路、机架结构、服务器冷板、监控与运维流程的物理基础设施，先做受控试点是理性的 go-to-market 路线。问题在于，试点不应被写成批量交付或稳定收入。它反而提示投资人要问：从试点到标准产品的转化率是多少？每一个部署是否需要大量工程师？工质、冷板、CDU、管路和备件是否已形成认证供应链？客户发生泄漏、停机或芯片换代时由谁承担责任？

### 2.3 2024：开始接单、寻找高热流 AI/HPC 验证点，并完成 Series A

2024-04，Accelsius 宣布 NeuCool 开始接单，宣传目标能力超过 **1,500W/chip**，面向 AI 等高强度工作负载。[S4] 这是从 trial 到可销售产品的关键节点，但公告没有披露订单数、交付量、价格或验证周期，所以“taking orders”不能被等同为客户已大规模采用。

同年 3 月，Texas Advanced Computing Center（TACC）宣布与 Accelsius 合作，为 Vista AI/HPC 超算项目提供冷却；公告明确称 TACC 是 Kickstart 的 strategic proof-of-concept customer，NeuCool 将与其他浸没式和单相 D2C 技术在同一 campus 环境对比。[S5] Vista 使用 NVIDIA GH100 Grace Hopper，公告称该产品的 TDP 超过 1,000W。这是很好的技术验证场景：芯片热通量足够高、机构有 HPC 运营能力、而且存在同场对比条件。它仍是 POC，不是可外推的长期商用客户订单。

2024-11，公司宣布在 2024 年初启动的 **2,400 万美元 Series A** 已完成，由 Innventure 私下募集和提供资金。公司称资金将用于国际化、美国发运和收入增长，以及工程、研发、销售、制造、运营团队扩张。[S3] 公司还称“从成立到产生收入少于三年”；这可以证明当时有收入生成的官方表述，却没有给出 ARR、毛利、客户数或现金流。[S3]

### 2.4 2024—2025：从单机架展示，向合作伙伴和 row-scale 产品推进

2024 年的合作叙事围绕“让客户看见、摸到、比较”而不是立即宣布大订单。iM Data Centers 的 Miami 项目展示 NeuCool Thermal Simulation Rack 与 Load Simulation Sled，用于演示高功率 CPU/GPU 热管理；这是一处展示/评估配置。[S16] Computacenter 英国总部的 HyperScale Integration Center 安放的是 NeuCool Thermal Simulation Rack，用于让欧洲伙伴和客户查看、测试和部署方案的便利入口。[S6] Equinix Ashburn 的 Co-Innovation Facility 则计划在 2025 年 Q3 部署 IR80；公告本身称该设施是帮助客户体验创新方案的平台。[S11]

这些布局有统一逻辑：高功率冷却的客户不会凭规格书改变机房架构，供应商必须把热性能、部署工序、漏液风险、可维护性和与服务器/设施的集成做成可被目测和反复测试的证据。代价是形成的可能是 demonstrations、labs 与 partner enablement，而不是可立即确认的规模收入。研究时应把“加入某创新设施”“展示 rack”“合作开发”与“购买并在生产机房运行”严格分账。

2025-10，Accelsius 宣布 NeuCool MR250 行级 CDU 通用可用（general availability），称单机架可提供 250kW 液冷能力，配置可为 1×250kW 或 2×125kW，并称少量部署在 2025 年 Q3 末开始、后续滚动到 2026 年。[S10] 这是从单机架 Kickstart/IR 系统向 row-scale 的真实产品化步伐。它同样不是全行业安装量证明：公告并未披露客户、数量、现场 uptime 或第几代产品的平均交付周期。

### 2.5 2025：性能上限、战略投资和未来园区协议并行出现

2025-04，公司披露两项内部测试：GPU socket 代表性 thermal test vehicle 的 cold plate 加热至 **4,500W** 后，测试基础设施而非冷却系统达到功率极限；以及行级两相 CDU 对一整机架 **250kW** AI server 的测试。后者使用四路 H100 服务器，并在 20/30/40°C PG25 设施水条件下报告最热 GPU 温度低于约 87°C 的 NVIDIA thermal throttle limit。[S15] 这些信息证明公司进行过很高功率的测试，且测试条件被公开描述；不证明已在相同热负荷、相同设施水温和相同运行年限下形成客户量产。

2025-10，Johnson Controls 宣布对 Accelsius 作出金额未披露的“multi-million-dollar strategic investment”。[S9] 随后在 2026-01，Accelsius 公布 **6,500 万美元 Series B**，由 Johnson Controls 领投、Legrand 进行战略投资。[S8] 对一个物理基础设施创业公司而言，这类投资的意义不仅是资本：Johnson Controls 带来大型设施热管理能力，Legrand 则带来电力、机架、连接与数据中心基础设施生态。不过，投资和伙伴集成不代表这两家公司为 Accelsius 承担所有生产、销售、保修或客户履约；具体分工和排他性未公开。

2025-11，DarkNX 与 Accelsius 宣布针对加拿大安大略一座新建 300MW AI 园区的部署协议，首期为两座各 65MW 设施、计划在 2026—2027 部署；芯片层用 NeuCool，设施层选用 Johnson Controls 的高效 chiller。[S13] 它是公司迄今最接近规模化的公开商业信号，也最需要克制解读：这是未来的 agreement，受园区建设、融资、电力、服务器、供应链、验收及双方履约影响；截至截止日不能写成已部署 300MW，更不能写入已实现收入或已验证的年化毛利。

### 2.6 融资与资本事件表

| 时间 | 事件与金额 | 已公开投资方/关联方 | 研究处理 |
|---|---|---|---|
| 2022 | 公司由 Innventure 形成 | Innventure。[S1] | 成立/孵化关系；非可量化融资金额。 |
| 2024-11 | Series A，2,400 万美元；2024 年初启动 | Innventure 提供并私下募集。[S3] | 已完成融资；不将 Innventure 的支持视为外部市场定价。 |
| 2025-10 | Johnson Controls 战略投资，“multi-million-dollar”，未披露确数 | Johnson Controls。[S9] | 已披露战略投资，不纳入精确累计融资。 |
| 2026-01 | Series B，6,500 万美元 | Johnson Controls 领投，Legrand 战略投资。[S8] | 已完成融资；估值、优先权和其他投资人未披露。 |

按可验证金额，公开 Series A 与 B 之和至少为 **8,900 万美元**；此为 2,400 万美元 + 6,500 万美元的算术推导，未将金额未披露的 Johnson Controls 早期战略投资计入。[S3][S8][S9]

## 三、技术与商业边界：NeuCool 的强项是热路径，不是整个数据中心

### 3.1 两相直连芯片方案到底解决什么

NeuCool 的核心主张是：让非导电介电流体在直接接触 CPU/GPU 的 cold plate 中吸热并发生相变，再通过回路排出热量，而不是让大量水/乙二醇直接接近电子器件。公司将其描述为包含两相冷却、智能监控、美国制造与专业服务的系统平台。[S3] 采用非导电流体的工程动机是降低液体泄漏直接损坏电子设备的风险；但“降低风险”不等于没有泄漏、材料兼容、流体老化、密封、维护或环境合规风险。

相较风冷，D2C 直接把热量在 chip 周边带走，理论上能容纳更高功率密度；相较单相 D2C，沸腾相变有更高的单位质量吸热潜力，并可在更高设施水温下运行。公司声称 NeuCool 能降低能耗、消除水消耗，并将设备功率密度提升；这些均是供应商估算与测试主张，系统效益会被气候、供水/冷却塔、机房布局、服务器设计、CDU、负载曲线和运维方式显著改变。[S3][S15]

### 3.2 从 chip 到 row：产品化与交付边界

MR250 将公司从单一 rack/demo 系统推向行级 CDU。250kW 是一个足以与高密度 AI rack 讨论的工程量级，但交付并不止是 CDU：还要有服务器 cold plates、歧管/软管、机柜结构、设施水侧、监控、施工、维修、备件和与 OEM 保修的接口。[S10] 公司提供专业服务与 partner program，侧面说明其商业模式包含相当重的工程/交付要素。[S3][S17]

这也是投资判断的中心。若 NeuCool 的冷板、流体、CDU、控制和现场服务可标准化，row-scale 产品会把一次次试点沉淀为可复制的部署模板；若每次都要针对不同 GPU、服务器、机柜和机房水路做深度定制，收入会更接近项目制系统集成，毛利、交付能力和营运资本都会承压。公开资料不足以判断两种收入各占多少。

### 3.3 性能数据的正确读法

4,500W cold-plate 结果说明测试架构存在较大的 headroom；250kW rack 测试说明公司在指定服务器、PG25 设施水、流量和测试条件下展示过系统级能力。[S15] 两组数据都很有参考价值，却不能直接得到“任何下一代 GPU 都能在 4,500W 连续生产运行”或“每个客户机架都可稳定达到 250kW”的结论。

同理，Series B 公告中“相对单相 D2C 35% OpEx savings、8—17% TCO savings”是公司口径；Series A 公告中的“约 50% energy reduction、10 倍 rack power density”也是估算/营销比较。[S3][S8] 采购验证应把节能拆成 IT 负载、泵/风机/CDU、chiller/cooling tower、free cooling、补水和维护成本，并在本地气候与真实 GPU duty cycle 下测量，而不是用单项宣称替代总拥有成本。

### 3.4 环境、监管与保险边界

Accelsius 将水少/无水与非导电流体作为重要卖点；但 Series A 的前瞻风险披露也明确指出，含氟制冷工作流体可能面对监管审查。[S3] 这不是产品已经违反法规的证据，却足以构成长期尽调项目：工质成分、GWP、PFAS 相关限制、泄漏检测/回收、跨国运输、废弃物处置、材料相容性和保险条款均需在具体地区核验。

Kickstart 由现场工程师与热科学团队共同部署并持续收集反馈，说明泄漏/资产损害、维护与运行风险是客户会实际审查的问题；这套试点支持不能替代长期产品责任、最大赔付、免赔额、停机损失、保险公司资信和保修责任的合同审查。[S18] 对机器人公司，GPU 资产、训练数据和项目里程碑的间接损失，通常远高于硬件替换成本。

## 四、横向分析：液冷路线之争，核心不只是“更冷”，而是谁承担设施与运维复杂度

### 4.1 当前生态位

| 路线/代表 | 核心取舍 | 相比 Accelsius 的强项 | Accelsius 的潜在差异与风险 |
|---|---|---|---|
| 风冷、rear-door heat exchanger、传统机房制冷 | 成熟、供应链广、改造风险较低 | 运维熟悉，适合较低功率密度和存量机房 | 对高功率 GPU rack 的空间、噪声和热通量约束更明显；Accelsius 试图在此处提供迁移路径。 |
| 单相 D2C（冷板 + 水/乙二醇/CDU） | 生态成熟、组件/服务器支持广 | OEM、CDU 和管路供应链更完整，服务人员更多 | Accelsius 以两相与非导电工质寻求更高热余量和较少用水，但需证明长期可靠性与总成本。 |
| 浸没式冷却 | 可包覆高热密度组件，适合特定硬件布局 | 对极高密度、特定整机设计有成熟实践 | Accelsius 保留传统服务器形态和 chip-level 可维护性；浸没则可能简化某些极端热设计。 |
| 两相 D2C 同类方案 | 以相变热传递取得高 heat flux 能力 | 可能已有不同工质、冷板、CDU、服务体系与市场案例 | Accelsius 的差异需由可量产的 NeuCool、MR250、服务和供应链证明，而不是“两相”这一概念本身。 |
| Johnson Controls、Vertiv、Schneider/Legrand 等设施生态 | chiller、CDU、配电、机柜、施工与全球服务 | 设施级客户关系、保修能力、标准化交付和供应链规模 | Accelsius 已获得 JCI/Legrand 投资，但合作并不等于拥有同等全球服务/履约能力。[S8][S9] |

### 4.2 与单相 D2C：热性能优势与可接受风险必须同时成立

单相 D2C 的优势在于产品形态、OEM 支持、维修培训和设施设计都更容易被采购组织理解。两相 D2C 的承诺是利用相变和非导电工质，在高热通量、较暖设施水与漏液后电子安全方面提供额外空间。Accelsius 把两相、直接芯片接触和介电流体视为平台的核心。[S3][S15]

真正的竞争不会由一个 thermal test 决定。客户会比较冷板接触/安装、流量分配、泵与控制冗余、工质供给和回收、fluid aging、传感器漂移、故障检修、OEM 保修、改造时间、备件、区域服务和长期责任。若 Accelsius 不能把这些跨越硬件/设施边界的环节标准化，它的理论热性能就难转化为有吸引力的风险调整后 TCO。

### 4.3 与浸没式：更像“保留服务器习惯”的路径

浸没式冷却的逻辑是把服务器置于介电液体环境中，极端密度时可获得很强热管理能力，但可能改变服务器维护、更换、布线和机柜操作流程。Accelsius 的 D2C 路线将流体限制在芯片冷板及闭环系统内，试图让客户保留更接近传统 rack/server 的操作方式，并通过 Kickstart、demo rack 和 partner program降低改造心理门槛。[S16][S17][S18]

这种折中很适合希望平滑升级现有机房的客户，也可能导致其在极端密度或新型整机架构下需要与浸没式方案分别验证。对于人形机器人公司，若训练集群随模型规模快速跃升，不能只基于“维护更像传统服务器”做决策；要同时比较设备密度、调试效率、供应链、数据中心电力、设施水和失败恢复。

### 4.4 与设施巨头：战略投资能缩短生态差距，不能替代交付记录

JCI 和 Legrand 对 Accelsius 的投资具有战略意义：前者拥有建筑/数据中心热管理背景，后者拥有电力与数字基础设施产品组合。[S8][S9] DarkNX 又明确将 NeuCool 放在 chip cooling 层、JCI chiller 放在 facility cooling 层，说明 Accelsius 的产品可以成为更大热管理栈的一部分，而不是试图独占全机房。[S13]

但这也暴露出公司最重要的商业问题：在客户看到整套机房方案时，Accelsius 是否能保住高价值的 chip-level IP 与服务份额，还是会被大型设施厂商整合为一个可替换组件？答案取决于技术可替代性、标准接口、供货能力、认证、售后 SLA 和伙伴合同。公开投资公告没有披露这些经济权利，不能因为“JCI/Legrand 入股”就假定已得到全球渠道或订单保障。

### 4.5 客户、试点与订单的证据分层

| 公开对象 | 公开关系 | 证据强度与不能推导的内容 |
|---|---|---|
| TACC | Kickstart 的 strategic proof-of-concept customer，服务 Vista 项目。[S5] | 强技术试点证据；不能推导长期批量订单或收入。 |
| Computacenter | 英国 HyperScale Integration Center 展示 Thermal Simulation Rack。[S6] | 展示/集成便利性证据；不是大规模生产机房部署。 |
| Equinix | Co-Innovation Facility 的 IR80 计划部署。[S11] | 真实创新设施部署线索；不能推导 Equinix 全网采购或商业合同规模。 |
| Nordik | 加拿大 AI data center 共创新实验室，供客户验证性能和效率。[S12] | 试验/测量环境；项目计划不等于验收交付。 |
| DarkNX | 300MW 园区未来部署 agreement，首期两座 65MW、2026—2027。[S13] | 最强的公开未来商业信号；仍是协议和计划，未完成/未确认收入。 |

## 五、横纵交汇：两相技术要跨越的不是沸点，而是“从试点到可信赖基础设施”的鸿沟

Accelsius 的纵向路径把它推到一个很有吸引力、也很残酷的位置。公司从 Innventure 的商业化平台出发，先用 Kickstart 将两相 D2C 放到客户场地，继而接单、做 TACC POC、发布 MR250，并引入 JCI/Legrand 这样的设施生态投资人。[S1][S3][S5][S8][S10] 这使它不只是研发实验室：它已经有产品、资金、工程团队、试点路径与未来大项目协议。

同时，这条路径尚没有绕开硬件基础设施公司的经典难题。实验室 4,500W headroom、250kW rack 测试、TACC POC、Equinix 创新设施和 DarkNX agreement 分别回答了“物理上可能吗”“系统能跑吗”“用户愿试吗”“生态愿展示吗”“客户愿签未来计划吗”。它们还没有完整回答“每个地区都能稳定交付吗”“故障十年后由谁修”“每 rack 的项目毛利如何”“工质监管变化怎么办”“客户能否把试点平滑复制到数百 rack”。[S5][S10][S13][S15]

### 5.1 三种情景

**最可能情景：在 AI rack 升级周期中成为高密度液冷的专业供应商。** 通过 MR250、现场服务、系统集成伙伴和 JCI/Legrand 生态，Accelsius 将一部分 Kickstart/demo 客户转为具体 AI/HPC 部署。它的价值来自帮助已有数据中心提高芯片/机柜热密度，而不是卖通用空调。前提是生产、认证、服务与供应链能跟上，而无需每单从零设计。

**乐观情景：DarkNX 首期按计划交付，形成两相 D2C 的规模样板。** 若 2026—2027 的 65MW+65MW 首期顺利建成，且温水、能耗、可靠性和维护数据优于客户可选方案，Accelsius 可获得超越 demo rack 的长期证据；JCI 和 Legrand 的资本与设施生态也可能转化为交付与渠道能力。[S8][S13] 这仍需经过设计、采购、安装、commissioning 和多年运营，不能在协议披露时提前兑现。

**危险情景：物理性能优秀，但销售/交付/监管成本压住扩张。** 高功率热测试与创新实验室带来关注，却无法解决不同 OEM、冷板、机架、设施水、地域法规与维保网络的差异；两相工质的监管、保险或客户风险偏好提高，单相 D2C、浸没式或设施巨头方案更快标准化。此时公司可能维持高价值专业项目，却难成为可规模复制的基础设施平台。[S3][S18]

## 六、面向人形机器人公司的行动建议

### 6.1 采购：先做设计与热工 P0，而非直接把训练中心押上去

建议对计划中或改造中的云端训练/仿真集群做 8—12 周 P0。先以一至两种真实 GPU/服务器、目标 rack 密度、当地设施水和预期 workload duty cycle 测试。对照方案至少包括：现有风冷/设施方案、单相 D2C、两相 D2C（Accelsius）以及在适用时的浸没式。评价指标包括 GPU junction temperature/thermal throttle、整机和 rack 可用性、IT 与非 IT 能耗、水/工质消耗、维护窗口、故障恢复、泄漏/泄压/传感器异常演练、部署时间、停机风险和全生命周期 TCO。

不得把公司公开的 4,500W cold-plate 测试或 250kW test rack 直接作为项目设计保证书。[S15] 对机器人数据、训练 checkpoint 和长期仿真流水线，还要把数据中心故障、冷却失效、远程支持和备件 lead time 纳入业务连续性设计。

### 6.2 投资与并购：以交付证据而非 AI 基建热度决策

**投资建议：战略观察，不启动财务投资立项。** 正面因素包括 2024 年起的公开发货/收入表述、Series A/B、两相 D2C 的明确产品路线、MR250 通用可用、JCI/Legrand 的战略资本、TACC POC 和 DarkNX 的未来协议。[S3][S5][S8][S10][S13] 负面/未知因素包括主体边界、估值、收入/毛利、订单 backlog、试点转化率、制造良率、现场服务能力、工质合规、保险、长期可靠性和 DarkNX 等项目的实际开工/验收。

**并购建议：不启动。** 两相冷却的价值依赖研发、制造、现场服务、全球合规和伙伴生态，收购后还可能失去对其余客户/OEM 的中立性。只有在本公司确定要拥有大规模 AI/HPC 训练园区、试点显示其在真实 TCO 和可靠性上明显优于替代方案、并可取得 IP/团队/生产/服务及关键伙伴权利时，才值得重新评估战略少数股权或并购。

### 6.3 自研边界

本公司应自研或强控制的部分是：机器人训练/仿真 workload 的容量规划、rack power envelope、设备/模型重要性分级、数据/训练连续性、故障恢复和与芯片路线图的协同。可采购的部分是冷板、CDU、流体回路、冷却控制和现场服务。不要将液冷供应商当成训练集群架构总承包方：它不能替代 GPU 采购、服务器选型、网络/存储、训练框架、作业调度、数据治理或设施全生命周期运营。

## 七、合作网络、冲突与待验证事项

### 7.1 关系网络必须拆开

| 关系类型 | 已公开对象/证据 | 可确认关系 | 不可推导内容 |
|---|---|---|---|
| 发起方/投资方 | Innventure；Johnson Controls；Legrand。[S1][S3][S8][S9] | Innventure 发起与 Series A；JCI 战略投资/领投 Series B；Legrand 战略投资 Series B。 | 持股、董事席位、优先权、排他性或所有制造/渠道责任。 |
| 技术试点/展示 | TACC、Computacenter、Equinix、Nordik、iM Data Centers。[S5][S6][S11][S12][S16] | 分别存在 POC、展示、创新设施、联合实验室或 demo 关系。 | 生产客户身份、合同金额、批量采购、稳定收入或全网部署。 |
| 未来部署协议 | DarkNX。[S13] | 对 Ontario 300MW 园区的 agreement，首期 2×65MW 计划部署。 | 已完工 MW、已确认收入、融资闭合、验收或项目成功。 |
| 设施与生态伙伴 | Johnson Controls、Legrand、Computacenter、iM、Equinix、Nordik、TACC。[S5][S6][S8][S11][S12][S16] | 公告中所述的投资、设施、展示或项目协作。 | 任何一方是客户、供应商、股东或独家渠道的全面关系。 |
| 科研/人才渊源 | Innventure；Accelsius 研发/工程团队；ARPA-E COOLERCHIPS 相关合作线索。[S1][S11] | 公司技术商业化与研究/创新设施的公开联系。 | 大学 IP 归属、联邦资助金额或专利独占性。 |

### 7.2 冲突、未知项与证伪条件

| 议题 | 支持证据 | 缺口/冲突 | 下一步与结论影响 |
|---|---|---|---|
| 法定主体 | 任务指定 Accelsius Holdings LLC；官网/页脚使用 Accelsius LLC。[S1] | 未找到一手材料证明二者法定关系。 | 交易前取得登记、组织图、IP/合同主体；在此之前不作股权或资产归属判断。 |
| 规模商业化 | 2024 起公开接单/收入表述，MR250 GA，DarkNX agreement。[S3][S4][S10][S13] | 无披露发运数量、backlog、客户转化、收入或验收数据。 | 不把试点/协议写成规模交付；索取订单、验收、收入与安装台账。 |
| 性能优势 | 4,500W test vehicle、250kW rack 条件明确；公司经济性主张。[S15] | 多为供应商测试/模型；缺第三方长期运营对照。 | 以目标服务器、气候和设施水独立复测，不以宣传参数定设计。 |
| 流体与环保 | 非导电工质、水少/无水卖点；公司披露含氟制冷工质监管风险。[S3] | 未披露完整成分、GWP、PFAS/回收/运输/地区合规细节。 | 要求 SDS、环境合规、回收及保险资料。 |
| DarkNX | 明确 announcement 与首期未来时间表。[S13] | 项目尚未按公告完工；受建设、融资、电力、供应链影响。 | 每季度跟踪开工、采购、安装、commissioning 与运营指标。 |
| 伙伴生态 | JCI/Legrand 投资，多个创新设施合作。[S8][S9][S11] | 投资/展示并不等于合同交付或全球服务保障。 | 核验伙伴协议、区域 SLA、谁负责保修、备件和现场支持。 |

## 八、来源审计表

| 编号 | 来源 | 等级 | 本报告使用范围 |
|---|---|---|---|
| S1 | [Accelsius 公司页](https://accelsius.com/company/)（访问于 2026-08-11） | 一手官网 | 2022 成立、Innventure、团队、官网公开主体/地址线索。 |
| S3 | [Accelsius：2,400 万美元 Series A](https://accelsius.com/accelsius-secures-24m-in-series-a-funding-to-efficiently-cool-data-centers/)（2024-11-13） | 一手融资公告 | Series A、收入生成表述、技术/经济主张、流体监管风险披露。 |
| S4 | [Accelsius：NeuCool 开始接单](https://accelsius.com/accelsius-launches-neucool-two-phase-direct-to-chip-liquid-cooling-system/)（2024-04-16） | 一手产品公告 | 接单时间与超过 1,500W/chip 的目标产品主张。 |
| S5 | [Accelsius 与 TACC 合作](https://accelsius.com/accelsius-partners-with-texas-advanced-computing-center-to-enable-advanced-artificial-intelligence-computing/)（2024-03-13） | 一手合作公告 | TACC、Vista、GH100 与 Kickstart POC 的明确性质。 |
| S6 | [Accelsius 与 Computacenter UK](https://accelsius.com/accelsius-expands-european-presence-with-neucool-system-in-computacenter-uk-headquarters/)（2025-04-03） | 一手合作公告 | Thermal Simulation Rack 在集成中心的展示/测试关系。 |
| S8 | [Accelsius：6,500 万美元 Series B](https://accelsius.com/series-b-announcement/)（2026-01-12） | 一手融资公告 | Series B、JCI/Legrand 投资、行级两相路线和公司经济性主张。 |
| S9 | [Johnson Controls 战略投资公告](https://accelsius.com/johnson-controls-announces-investment/)（2025-10-06） | 一手投资方公告转载 | 未披露金额的战略投资、设施冷却生态关系。 |
| S10 | [NeuCool MR250 通用可用](https://accelsius.com/accelsius-announces-neucool-mr250/)（2025-10-13） | 一手产品公告 | 行级 CDU、250kW、GA 与部署节奏口径。 |
| S11 | [NeuCool 于 Equinix Co-Innovation Facility](https://accelsius.com/accelsius-brings-neucool-to-equinix/)（2025-07-15） | 一手合作公告 | IR80 创新设施部署和其展示性质。 |
| S12 | [Accelsius 与 Nordik 联合创新实验室](https://accelsius.com/accelsius-partners-with-nordik-data-centers-to-build-next-generation-ai-data-center-and-co-innovation-lab/)（2025-02-11） | 一手合作公告 | 联合实验室、测试/测量环境而非已验证订单。 |
| S13 | [DarkNX 与 Accelsius 300MW 园区协议](https://accelsius.com/darknx-accelsius-press-release/)（2025-11-17） | 一手商业公告 | 未来 agreement、首期时间表及设施/芯片层分工。 |
| S15 | [Accelsius 热性能测试里程碑](https://accelsius.com/accelsius-achieves-industry-leading-thermal-milestones-for-next-generation-ai-computing/)（2025-04-10） | 一手测试公告 | 4,500W test vehicle 与指定条件下 250kW rack 测试；不作第三方认证。 |
| S16 | [Accelsius 与 iM Data Centers Miami 合作](https://accelsius.com/accelsius-and-im-data-centers-partner-to-bring-sustainable-high-performance-cooling-solutions-to-miami-data-center/)（2024-11-19） | 一手合作公告 | 展示 rack、模块化设施与合作边界。 |
| S17 | [Accelsius Accelerate Partner Program](https://accelsius.com/accelsius-announces-new-partner-program-to-support-the-rapid-growth-of-neucool-direct-to-chip-liquid-cooling-solutions/)（2024-01-18） | 一手渠道公告 | 系统集成/OEM/服务伙伴路线和公司产品/服务边界。 |
| S18 | [NeuCool Kickstart Program](https://accelsius.com/accelsius-launches-neucool-kickstart-program-to-give-data-center-operators-exclusive-trial-access-to-its-two-phase-direct-to-chip-liquid-cooling-system/)（2023-12-06） | 一手项目公告 | field trial、共同部署、反馈与试点性质。 |

### 方法说明

本报告依横纵分析法，沿时间线追踪 Accelsius 从 Innventure 孵化、Kickstart 试点、订单开放、Series A/B、MR250 与未来园区协议的演变，并与风冷、单相 D2C、浸没式、两相路线和设施巨头的当下竞争结构交叉比较。所有性能、节能、试点、伙伴与未来项目均按其原始证据层级处理，不用营销或合作材料填补规模交付的空白。

## 九、产业链分类复核（报告末尾结论）

**主分类：`3.2 数据中心散热`（高置信）。** Accelsius 的承重产品 NeuCool/MR250 以两相直连芯片冷板、介电工质循环、CDU、热管理监控和服务，直接解决 AI/HPC 芯片到机架/设施水侧的散热、能耗与用水约束。[S3][S10][S15]

**不设正式次分类。** 与 Johnson Controls、Legrand、Computacenter、Equinix、Nordik、TACC、iM 和 DarkNX 的关系涵盖投资、展示、试点、未来协议或设施协同；这些不能证明 Accelsius 已成为负责电力、机柜、网络、土建与全设施交付的 `3.3 算力中心集成` 商。[S5][S6][S8][S11][S13]

**分类限制。** 两相 D2C 的热测试、MR250 通用可用和 DarkNX 未来部署说明公司正向高密度 AI 数据中心交付迈进，但不改变其价值创造重心：它卖的是冷却技术与相邻工程服务，不是 GPU 云、服务器、推理平台或完整数据中心总包。[S10][S13][S15]
