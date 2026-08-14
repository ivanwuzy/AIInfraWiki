# proteanTecs（ProteanTecs Ltd.）横纵分析报告（完整本地原文）

> Source: 本地文件 `横纵研究报告/proteanTecs_横纵分析报告.md`
> Collected: 2026-08-13
> Published: Unknown

# proteanTecs（ProteanTecs Ltd.）横纵分析报告

> 研究时间：2026-08-13 | 研究截止：2026-08-13 | 所属领域：半导体全生命周期监测、芯片内遥测、AI/HPC 可靠性 | 研究对象类型：公司
>
> 主体边界：本报告以官网隐私政策所载的以色列网站运营主体 **ProteanTecs Ltd.** 为研究锚点；美国及其他地区的销售、签约、雇佣、融资和 IP 持有主体尚未穿透核验。
>
> Raw: [About](../raw/sources/2026-08-13-proteantecs-about.md) | [2019 Series B](../raw/sources/2026-08-13-proteantecs-series-b-2019.md) | [Technology](../raw/sources/2026-08-13-proteantecs-technology.md) | [2020 Growth Equity](../raw/sources/2026-08-13-proteantecs-growth-equity-2020.md) | [2021 Growth Extension](../raw/sources/2026-08-13-proteantecs-growth-extension-2021.md) | [2022 Addition](../raw/sources/2026-08-13-proteantecs-addition-2022.md) | [FuriosaAI](../raw/sources/2026-08-13-proteantecs-furiosaai-2023.md) | [2025 Series D](../raw/sources/2026-08-13-proteantecs-series-d-2025.md) | [Rebellions](../raw/sources/2026-08-13-proteantecs-rebellions-2025.md) | [2026 TGVP](../raw/sources/2026-08-13-proteantecs-series-d-tgvp-2026.md) | [Synopsys SLM](../raw/sources/2026-08-13-synopsys-slm.md) | [Synopsys SLM PVT Monitor IP](../raw/sources/2026-08-13-synopsys-slm-pvt-monitor-ip.md)

## 目录

1. 一句话定义与研究边界
2. 纵向分析：把可观测性嵌进芯片
3. 横向分析：不是普通监控软件的竞争
4. 横纵交汇洞察与情景推演
5. 投资、并购与人形机器人公司建议
6. 融资历史与合作网络
7. 证据、冲突与未确认事项
8. 产业链分类分析

## 一句话定义与研究边界

**proteanTecs 是一家成立于 2017 年的以色列半导体基础设施公司：它把芯片内 Agent/传感器 IP、设计集成工具、生产测试分析和现场运行时分析连成一条“从 silicon 到 system 到 field”的数据链，向芯片及系统厂商出售可用于功耗、性能、可靠性和可用性决策的深层遥测能力。**

对人形机器人公司而言，它不是训练/推理算力供应商，也不是通用 GPU 集群监控 SaaS。它的潜在价值在于：若自研机器人 SoC、边缘 AI 加速器、域控制器或高可靠性计算板，能否在流片前把可验证的芯片状态数据路径设计进去，并在量产、整机测试和现场维护持续使用。它的难点也在同一处：价值在 tape-out 前被锁定，采购周期、IP 权属、数据出境与跨境签约都比部署一套普通可观测性软件重得多。

### 研究边界和结论摘要

本报告以公司官网、合作方共同署名或可由合作方直接识别的公开材料为优先证据；媒体报道只作融资和行业背景交叉验证。公司公告中的“领先”“显著”“无 PPA 影响”等表达均标为公司主张，不能替代第三方性能审计、合同或收入确认。

初步结论是：**应列入“战略合作/技术尽调观察”，不建议在未完成 IP、合同实体、客户续费和机器人工作负载验证前作并购或重大财务投资判断。** 该公司具有少见的芯片设计、生产测试与现场运维贯通能力，且已经公开披露 AI 加速器客户采用；但公开材料不足以确认单客户收入、部署规模、续费率、遥测对 PPA 的实测影响，以及何一法人实际持有待交易 IP。

## 纵向分析：把可观测性嵌进芯片

### 2017-2018：Mellanox 创业团队从互联芯片的量产痛点出发

proteanTecs 成立于 2017 年。官网列出的共同创始人 Shai Cohen（CEO）、Evelyn Landman（CTO）和 Roni Ashuri（COO）均有 Mellanox 经历；Cohen、Landman、Ashuri 分别覆盖运营、后端/产品工程和前端芯片/硅调试与软件。Mellanox 后于 2019 年被 NVIDIA 收购，收购价约 70 亿美元是公开交易事实；但不能把该交易直接写成 proteanTecs 的技术或客户背书。[S1]

这段履历解释了公司没有从云端日志或机房告警切入。高速互联和复杂 SoC 的问题常在设计、硅后 bring-up、量产测试、板卡集成和客户现场分别留下不兼容的数据：传统传感器能报温度或电压，却未必能把应用压力、时序余量、老化和失效风险连成可行动的模型。公司的早期命题是先在芯片内布设可控的观测 Agent，再以软件把不同阶段的数据翻译为相同的“电子健康”语言。

这种选择带来两层锁定。第一，客户必须在设计期决定接入，销售不再是现场装一个探针的短周期交易。第二，进入 RTL、验证、DFT、固件和测试流程后，替换成本高，但供应商也要承担跨工艺、跨 EDA、跨 ATE 的长期兼容责任。它是一门深技术基础设施生意，不是一段模型算法就能替代的生意。

### 2019：从隐身模式走出，Universal Chip Telemetry 成为产品语言

2019 年 4 月，公司宣布完成 **$35m Series B**，并称累计融资接近 $50m。公告把产品命名为 **Universal Chip Telemetry (UCT)**：嵌入芯片的 proprietary Agents 产生数据，云端平台以机器学习和分析用于生产质量、运行可靠性和故障预警；公告同时称已有多样化客户，但没有披露客户名单、合同或收入。[S2]

这一节点很关键。UCT 并非单一 PVT 传感器 IP 的重新命名，而是试图定义从芯片厂商、系统厂商到数字服务商都可使用的遥测接口。好处是把产品从 EDA/IP 点工具抬升为生命周期平台；代价是要证明采集数据的面积、功耗、时序、验证和安全开销可接受。公司当前技术页仍称其 IP 可在 functional/test modes 收集高分辨率参数数据，并声称 PPA 影响最小；该表述是供应商自述，公开页面没有给出工艺、覆盖率、面积百分比或独立测试条件。[S3]

### 2020-2022：资本推动全球化，产品沿“设计-量产-现场”铺开

2020 年 8 月，proteanTecs 披露由 Koch Disruptive Technologies 领投、Valor Equity Partners 与 Atreides Management 参与的 **$45m growth equity**。公告称资金用于市场渗透和全球运营扩张，且当时已有商业 traction，但未给出 ARR 或订单额。[S4]

2021 年 9 月，公司又披露对上述 growth round 的 **$50m extension**，由 KDT 领投，MediaTek、Advantest、Porsche SE、Champion Motors 等参与，并称累计融资达到 $150m。这里“extension”不是新的、可与 2020 轮并列的独立 Series C；应按同一 growth-equity 计划下的追加融资处理，避免把两条公告误加为两次完整轮次。[S5]

这两年，公司开始把早期“预测失败”的叙事拆成更能嵌入客户流程的产品段：

| 生命周期环节 | 公开产品能力 | 购买者真正要解决的问题 | 证据边界 |
|---|---|---|---|
| 芯片设计 | Agent/传感器硬件监测 IP、IP compilation、RTL 集成/实现验证工具 | 在未流片前建立能读出时序、PVT、压力和互连状态的观测点 | 公司技术页；未公开授权费、PPA 实测或 IP 合同 [S3] |
| 芯片生产 | 云端分析、on-tester/edge 软件、characterization/qualification/test 决策 | 识别边际硅片、缩短调试与量产爬坡 | 公司技术页和合作公告；无单客户良率/成本审计 [S3] |
| 系统生产 | on-board 分析和系统测试决策 | 把芯片数据用于板级/整机质量和可靠性判定 | 产品可见；销售规模待核验 [S3] |
| 现场运行 | in-chip firmware 与板端 runtime analytics | 预测退化、闭环降压/功耗优化、诊断与预防维护 | 产品可见；现场 KPI 主要来自公司披露 [S3] |

2022 年 5 月，Addition 向公司投资 **$45m**，公司称自 2017 年以来累计融资“接近 $200m”。这一口径与此前 $35m、$45m、$50m 及早期未逐项披露资本相容，但不应通过简单相加推定每笔均由同一法人与同一证券承接。[S6] 同年公开材料还显示其在代工、测试与 IP 生态中继续铺设入口，例如加入 TSMC/IP 生态、与 Advantest、Teradyne 等测试系统生态协作。联盟资格或联合营销只证明技术接入和商务关系，不能自动证明客户订单。

### 2022-2024：从“监测”走向可交付的生产与 AI 加速器案例

市场对公司路线的一个压力是：芯片内遥测只有被系统厂商用来做出更好的 binning、功耗、可靠性或售后决定时才有价值。proteanTecs 因而持续将产品语言从“sensor”转为“analytics + action”。其技术页当前列出 production software（cloud、tester、board）和 in-field software（芯片固件、板端实时分析）两层，这说明商业承载物至少包含 IP/工具授权和软件/服务，而非只卖一份监控 dashboard。[S3]

AI 方向的一个公开锚点来自 2023 年 5 月。公司宣布韩国 AI 芯片公司 FuriosaAI 选用其 deep-data analytics，用于下一代面向 hyperscale data center 的 inference chip 的性能及现场可靠性；FuriosaAI CEO 引语将需求描述为加快产品开发、并在 uptime-sensitive 场景给客户提供 in-field monitoring。该公告有客户实名与客户高管引语，强于仅有供应商 Logo 的材料；但仍未披露合同金额、量产批次、实际 PPA 改善或客户续约。[S7]

因此，FuriosaAI 不应被表述成“已证明其软件带来某个比例性能提升”，却足以证明公司已作为嵌入式监测 IP/分析方案进入至少一款 AI 加速器的产品开发与现场可观测性路径。对于自研机器人芯片，这是最可迁移的证据：客户不是购买一个通用机房运维外包，而是在芯片产品中预埋了遥测能力。

### 2025-2026：AI/HPC 可信度提升，融资和地域扩张仍快于财务透明度

2025 年 9 月，公司宣布 **$51m Series D**，IAG Capital Partners 领投，Samsung Catalyst Fund、Arm、Siemens 作为新战略投资者参与；Addition、Zeev Ventures、Avigdor Willenz Group、MediaTek Innovation Fund、Intel Capital、Porsche SE、KDT 等列为继续支持者。公告称公司覆盖从生产到现场的系统健康与性能监测，并在以色列、美国、印度和台湾设点；这支持其继续独立运营和生态嵌入的判断，却没有公开审计营收、毛利或客户集中度。[S8]

同年 10 月，公司披露 Rebellions 在其面向大规模推理的 AI 加速器中采用 embedded lifecycle monitoring analytics。Rebellions 的 CTO 公开说明其从产品 ramp、volume production 到 datacenter deployment 都使用更深层的芯片可视性。这个案例比“合作开发”更接近客户采用，且覆盖部署后的可靠性；但公告仍是双方发布的材料，没有披露采购价格、芯片出货量、对比组或故障率改善。[S9]

2026 年 3 月，TOPPAN 的美国 CVC TGVP 进行金额未披露的战略投资。公司称累计融资已超过 $250m，并表示与 TOPPAN 正在讨论面向后者半导体客户的未来方案。这里必须区分两件事：战略投资为资金和渠道关系提供了强信号；“正在讨论”并不是已有客户合同或联合研发成果。[S10]

截至研究截止日，公司官网把能力明确概括为 embedded hardware monitoring system、on-chip Agents、集成工具和软件套件，并称支持 28nm 至 2nm、参与 TSMC OIP、Intel IFS 和 Samsung SAFE 等联盟。该兼容性、工艺覆盖和“all major foundries”说法尚无逐工艺清单和独立验收材料，宜作为高优先级尽调项，不作为已证实的跨节点商业交付。[S3]

## 横向分析：不是普通监控软件的竞争

### 竞争场景：少数直接同类，多个层级替代

这里属于“竞品充分”的场景，但产品层次不同：有的公司卖芯片内监控 IP，有的卖 SLM/DFT/测试平台，有的卖系统或集群 RAS。若把它们都放入“监控软件”篮子，会错过采购决策发生在 tape-out 之前这一事实。以下选择三类最有代表性的正面或替代路线：通用嵌入式 PVT monitor IP、Synopsys Silicon Lifecycle Management/测试生态（设计与生命周期平台）、芯片原厂自身遥测/RAS（垂直内化）。Datadog 等云监控软件不是直接可比对象，因为它们通常不能补回未被设计进硅片的数据。

| 对象/路线 | 客户购买物与进入节点 | 相对 proteanTecs 的强项 | 对 proteanTecs 的约束/风险 |
|---|---|---|---|
| proteanTecs | 芯片内监测 IP、集成工具、生产与现场分析；设计期进入，贯穿量产和部署 | 用同一 Agent 数据连接设计、测试、系统与现场；已实名披露 FuriosaAI、Rebellions 采用 [S7][S9] | 需证明额外 IP/流程开销、分析增量和持续软件收入 |
| 通用嵌入式 PVT monitor IP（以 Synopsys SLM PVT Monitor IP 为例） | PVT、嵌入式监测 IP；设计期进入 | 专注确定的环境监测功能，IP 交付边界较清晰 | 若客户只需温度/电压/工艺监控，proteanTecs 的完整栈可能被视为过度配置 [S12] |
| Synopsys SLM/测试与 EDA 生态 | 生命周期管理、测试、分析和 EDA/DFT 工具，已有设计工具装机基础 | 设计入口、EDA 工作流和大客户关系强，能够把部分能力打包进既有平台 | 对 proteanTecs 是渠道伙伴也是最强替代者；客户可能偏好单一 EDA 供应商 [S11] |
| 芯片原厂自建 telemetry/RAS | 芯片/驱动/固件/集群软件内置遥测和故障处理 | 知道全部微架构和固件接口，数据治理及部署路径短 | 原厂会吞噬通用供应商利润池；但对多代、多产品、第三方系统复用不足 |

### 通用嵌入式 PVT monitor IP：最直接的“传感器/IP 即产品”替代

以 Synopsys 的 SLM PVT Monitor IP 为公开例证，嵌入式 PVT/环境监控 IP 代表一种更窄也更容易采购的选择：设计团队在 IP catalog 中选定模块，满足安全、热管理、DVFS 或工艺监测需求，尽量不引入新的数据平台。对只追求确定传感功能的机器人 MCU、低功耗 SoC 或成熟节点 ASIC，这类方案可能更合适。[S12]

proteanTecs 的差异不只是传感器数量，而是强调硬件监控 infrastructure、Agent 数据、生产软件和现场算法共用。这条路线的上限更高：可将同一芯片从 first silicon、ATE 到终端运行的历史串起来；但其价值也更难在采购时证明。若客户没有量产规模、没有可靠性闭环团队，或不愿将芯片遥测送到外部云，客户会倾向购买较轻的 IP，而不是整套 SLM 数据路径。

用户/客户视角的公开证据在此较薄。proteanTecs 的 FuriosaAI 与 Rebellions 引语强调“产品开发速度、数据中心 uptime、ramp 到 field 的可视性”，它们选择的是更完整的生命周期能力；这可解释为什么 AI/HPC 客户更愿意承担集成成本，但不能外推到所有低成本边缘芯片客户。[S7][S9]

### Synopsys：既是生态接口，也是平台型挤压者

Synopsys 的 SLM、DFT、测试与数据分析组合代表更强的相邻替代：它不必在每个细分 sensor 上完全复制 proteanTecs，也能凭设计工具、验证、测试与客户支持占据购买入口。其公开 SLM 资料把 silicon health、测试、可靠性和全生命周期洞察放入既有 EDA/测试体系。[S11]

proteanTecs 的防守点在于专门的 on-chip Agent 架构和可贯穿现场的分析应用，尤其在异构封装、AI 加速器和高可用系统中，需要比传统 production test 更细的动态数据。可是在采购组织看来，这也可能变成供应商叠加：一个客户已经付费给 Synopsys/Cadence/Siemens、ATE 厂商和云/系统集成商，必须证明 proteanTecs 给出的洞察不是已有流程的重复。

因此，两者关系并非简单敌对。proteanTecs 官网称兼容 Synopsys、Cadence、Siemens 等 EDA 和 Advantest、Teradyne 等 ATE 平台；这只是公司单方兼容声明，未取得各方逐产品背书前，不能认定为已形成联合销售或标准化集成。[S3] 对目标公司的尽调要问的不是“能否导入”，而是“在客户的 signoff、DFT、ATE 程序和 RMA 流程中谁为结果负责、谁为软件许可付费”。

### 芯片原厂内化：最难绕开的长期替代

NVIDIA、CPU/GPU/ASIC 厂商和机器人 SoC 厂商可在芯片、固件、驱动与集群软件中自行建设 telemetry、RAS、DVFS 和错误隔离。对能控制 RTL、firmware、driver、board management controller 与数据中心软件栈的原厂，自建路线有天然数据权限和产品绑定优势。

proteanTecs 的存在理由不是“原厂不会做监控”，而是降低跨阶段、跨组织和跨产品的重复工程，并以独立供应商身份为客户提供可复用的 Agent、集成、生产和分析栈。公开的 Rebellions 和 FuriosaAI 采用说明，这种外部化在新兴 AI 加速器中有需求。[S7][S9] 风险是，客户规模起来后可能收回 IP 或要求 source/escrow；或大型 EDA、IP、芯片原厂用捆绑产品压低单独授权价格。

### 当前生态位与趋势判断

proteanTecs 位于“芯片 IP/EDA”与“系统/集群可靠性”之间，真正的差异化是数据连续性而非单点监控。其公开客户采用覆盖 AI inference chip，战略投资者包括测试、处理器、EDA 与汽车产业资本，这使其成为值得跟踪的硅数据基础设施标的。

但生态位不等于已建立护城河。护城河至少需要三件事情同时成立：设计期 Agent 进入量产 SKU；生产/现场软件在同一客户持续付费；回传数据在隐私、主权与安全限制下仍可被公司用于改进模型。当前公开材料确认第一件在若干实名案例中有采用信号，后两件缺少合同、留存与数据权利证据。

## 横纵交汇洞察与情景推演

### 历史如何塑造今天的位置

Mellanox 创业团队的背景使公司从芯片设计、硅调试和量产的断层切入，而不是在 GPU 集群已经发生故障后才收集日志。2019 年用 UCT 定义“共同数据语言”，2020-2022 年用资本和联盟铺开 EDA/ATE/代工接口，随后以 FuriosaAI 和 Rebellions 将该语言带到 AI 加速器。这条时间线解释了它为什么比集群可观测性公司更早进入客户流程，也解释了它为什么比纯 sensor IP 公司承担更重的导入责任。

其优势的历史根源是长期的硅片、系统和数据中心经验：共同创始人熟悉从芯片到高性能网络系统的真实交付约束。[S1] 劣势也来自同一选择。软件公司可以在一周内试用，芯片 IP 却可能要横跨下一次 tape-out；每新增工艺、封装、架构和客户安全域都会增加验证和客户成功成本。资本融资快于公开财务披露，则放大了外部人对可扩张性而非技术本身的疑问。

### 三个未来剧本

| 剧本 | 触发逻辑 | 对公司和机器人战略的含义 |
|---|---|---|
| 最可能：成为 AI/高可靠 ASIC 的 SLM 专家供应商 | AI 加速器和 chiplet 复杂度提升，客户愿为研发、量产与 field 一体化数据付费；但销售仍按设计项目推进 | 适合合作和少数股权观察；用自研 SoC/控制器 PoC 验证真实价值，不将其当通用运维平台 |
| 最危险：被 EDA、原厂 telemetry 或轻量 sensor IP 夹击 | 价值无法量化，客户只保留 IP/传感器或将 RAS 内化；云端数据合规限制削弱模型闭环 | 不宜并购；任何采购须有独立数据权、退出与替代条款，避免把芯片路线绑在单一闭源格式上 |
| 最乐观：形成跨设计-量产-现场的硅健康数据网络 | 多家 AI/汽车/边缘芯片客户持续采用，产测和现场应用有可复用订阅收入，客户同意可控的数据学习 | 可考虑战略入股或联合产品；前提是取得留存、毛利、客户复用和 IP 归属的审计级证据 |

一个容易忽略的回环是：公司最早把“失败预测”讲成技术问题，今天在 AI/HPC 中真正卖的却是工程决策速度和责任边界。没有从现场数据反哺设计的闭环，它只是高级监测 IP；一旦闭环能在客户安全边界内稳定运行，才可能成为芯片生命周期的控制点。

## 投资、并购与人形机器人公司建议

### 建议动作

| 维度 | 当前建议 | 理由 | 触发条件 | 下一步验证 |
|---|---|---|---|---|
| 商务/技术合作 | **建议开展受控 PoC** | 对自研机器人 SoC、边缘推理加速器、域控制器或高可靠主板，可验证功耗余量、早期失效筛查与现场诊断 | 目标芯片仍未 tape-out，且能接受 RTL/IP 集成窗口 | 在同一设计/板卡上设对照组；测量 PPA、测试时间、误报/漏报、故障提前量、集成工时和数据出境路径 |
| 少数股权投资 | **观察，非立即执行** | AI 加速器采用和生态资本证明产品进入关键客户路径；但缺少审计收入、客户留存及实体穿透 | 证明三家以上付费量产客户、软件续费或随出货计费，且核心 IP 与签约实体清晰 | 核对 cap table、融资证券、ARR/毛利、前十客户集中度、backlog、客户验收及 IP 链条 |
| 并购 | **当前不建议** | 公司价值高度依赖核心团队、跨国实体、嵌入客户设计的 IP 和生态伙伴；公开证据不够支持可转让资产定价 | 取得完整集团结构、IP 清单/归属、员工保留方案、客户 consent 和出口管制评估 | 对每件专利/代码/EDA collateral 做 chain-of-title；核对以色列、美国等法律实体、数据/安全及变更控制条款 |
| 自研替代 | **保留局部自研** | 机器人场景可先自研板级遥测、驱动/固件 RAS 和故障数据治理；芯片内 Agent/量产分析可外部采购或合作 | PoC 显示通用 IP 不匹配机器人安全、功耗或数据主权要求 | 定义自研/采购边界：芯片 IP、固件、board analytics、云端模型及数据所有权分别归谁 |

### 对机器人工作负载的具体判断

人形机器人的训练集群可靠性只是较远的适配场景，proteanTecs 更近的协同在产品侧：端侧 NPU/SoC 的批次差异、长时间高温负载、关节控制实时性、电池与热约束、现场 RMA 和安全诊断。其方案若能在不破坏安全认证和实时性的条件下把芯片状态映射到整机故障模式，价值可能高于单纯数据中心节能。

但这种价值不能由 AI/HPC 公告直接推导。机器人应要求至少覆盖：目标节点与封装、功能安全等级、传感器/Agent 对面积/功耗/时序的实测、机器人任务负载下的诊断灵敏度、离线部署选项、原始数据与训练数据归属、客户现场数据保留地点，以及失效时的责任和 support SLA。

## 融资历史

| 日期 | 轮次/事件 | 金额与原文口径 | 公开投资者/参与者 | 融资后累计口径 | 证据与判断 |
|---|---|---:|---|---:|---|
| 2019-04-01 | Series B、走出隐身 | $35m | Avigdor Willenz、Intel Capital、ITI、Mitsubishi UFJ Capital、Redline、Viola、WRVI、Zeev 等 | 近 $50m | 公司公告；近 $50m 含未逐项披露早期资金 [S2] |
| 2020-08-27 | Growth equity | $45m | KDT 领投；Valor、Atreides 与既有投资者 | 未披露 | 公司公告 [S4] |
| 2021-09-23 | Growth equity extension | $50m | KDT 领投；MediaTek、Advantest、Porsche SE、Champion Motors、既有投资者 | $150m | 公司公告将其明定为 2020 growth round 的 extension，非应重复计数的独立整轮 [S5] |
| 2022-05-10 | Addition 融资 | $45m | Addition | 自成立以来“近 $200m” | 公司公告 [S6] |
| 2025-09-09 | Series D | $51m | IAG 领投；Samsung Catalyst Fund、Arm、Siemens；既有投资者继续支持 | 未披露 | 公司公告 [S8] |
| 2026-03-04 | 战略投资 | 未披露 | TGVP（TOPPAN 美国 CVC） | “超过 $250m” | 公司公告；金额、证券类型、持股比例未披露 [S10] |

**复核结论：** 公司各期“累计融资”并不能用表中已知金额机械相加。已公开金额相加为 $226m（$35m+$45m+$50m+$45m+$51m），另有 2019 年公告所说但未拆分的早期资金；2022 年“近 $200m”和 2026 年“超过 $250m”在方向上可相容，但无法逐项对账。2021 extension 是否包含特定旧证券、2025-2026 之间是否有未公告融资、以及各轮承接法人均待核验。

## 合作网络

### 投资方/股东

| 对方 | 公开关系 | 可确认内容 | 不可确认内容 | 来源 |
|---|---|---|---|---|
| Intel Capital、Viola、WRVI、Zeev 等 | 2019 Series B 投资者 | 公司点名为该轮投资者 | 当前持股、董事席位、承接主体 | [S2] |
| KDT、Valor、Atreides | 2020 growth equity | 公司点名 KDT 领投及其他参与者 | 当前股比、优先权条款 | [S4] |
| MediaTek、Advantest、Porsche SE 等 | 2021 extension 战略投资者 | 公司公告点名参与 extension | 是否仍持股及业务采购规模 | [S5] |
| Addition | 2022 融资投资者 | $45m round | 当前持股与证券条款 | [S6] |
| IAG、Samsung Catalyst Fund、Arm、Siemens | 2025 Series D | 公司公告点名 | 是否取得商业排他/信息权 | [S8] |
| TGVP | 2026 战略投资者 | 金额未披露的投资 | 持股比例、合同和联合产品 | [S10] |

### 客户/订单

| 对方 | 已公开的采用/订单证据 | 可信度 | 不能推定的结论 | 来源 |
|---|---|---|---|---|
| FuriosaAI | 公开称 selected proteanTecs，用于下一代 hyperscale inference chip 性能与现场可靠性 | 中高：双方关系有客户 CEO 引语，但公告由供应商发布 | 合同金额、量产数量、实际节能/可靠性收益、续约 | [S7] |
| Rebellions | 公开称 adopted embedded lifecycle monitoring analytics，用于规模化推理加速器；CTO 说明覆盖 ramp、量产及数据中心部署 | 中高：实名客户与高管引语 | 采购金额、部署规模、故障率改善和收入确认 | [S9] |
| 其他“global leaders” | 公司称服务数据中心、汽车、通信和移动市场 | 低：无客户清单或合同 | 具体订单、客户数、收入集中度 | [S8] |

### 产业合作

| 对方 | 关系性质 | 可确认内容 | 边界 | 来源 |
|---|---|---|---|---|
| TOPPAN/TGVP | 战略投资及未来协作讨论 | TGVP 投资；双方讨论面向 TOPPAN 半导体客户的未来方案 | “讨论”不是订单或联合产品交付 | [S10] |
| TSMC OIP、Intel IFS、Samsung SAFE | 生态/IP alliance | 公司称为联盟参与者 | 联盟资格不等于各工艺客户流片或代工背书 | [S3] |
| Advantest、Teradyne | ATE 生态兼容/合作 | 公司称支持其测试平台；历史公告有 Advantest 战略投资 | 未逐项核到正式联合销售、收入或排他 | [S3][S5] |

### 技术/联合研发

| 对方 | 公开关系 | 技术内容 | 边界 | 来源 |
|---|---|---|---|---|
| Arm | 2025 Series D 战略投资者；公司称支持 Arm/RISC-V 架构 | 投资事实；架构支持为公司自述 | 未取得 Arm 产品团队对具体 IP/方案的独立技术背书 | [S3][S8] |
| GUC、Alchip、Akeana、Andes、CEVA 等 | 官网新闻列出合作或联合方案 | 反映其在 ASIC、RISC-V、chiplet 生态的接口布局 | 本报告未逐项核验每项合同和量产状态，不列作已验证订单 | [S13] |
| EDA 厂商 | 公司称兼容 Synopsys、Cadence、Siemens | 设计/实现和测试流程接入主张 | 兼容声明不等于共同研发、认证或商业成功 | [S3] |

### 高校/科研渊源

| 对方 | 公开关系 | 结论 | 来源 |
|---|---|---|---|
| Technion（以色列理工学院） | 共同创始人 Roni Ashuri 取得该校电子与计算机工程学位；创始团队的工程人才渊源 | 人才教育关系，不是可推定的技术转让、股权或联合实验室 | [S1] |
| 其他高校/科研机构 | 本轮检索未找到公司正式联合实验室、排他科研授权或成果归属的公开一手材料 | 应保持“未确认”，不能因顾问、校友或论文关联推断产权 | [S1][S3] |

## 证据/来源

| 编号 | 来源与性质 | 可支撑事实 | 局限 | 访问日期 |
|---|---|---|---|---|
| S1 | [proteanTecs About](https://www.proteantecs.com/about)（公司一手；Raw: [本地原文](../raw/sources/2026-08-13-proteantecs-about.md)） | 创始团队、Mellanox/Intel 经历、2017 创立 | 管理层自述；不证明 IP 或股权 | 2026-08-13 |
| S2 | [2019 Series B](https://www.proteantecs.com/pressroom/proteantecs-completes-successful-series-b-funding-and-launches-out-of-stealth-mode)（公司一手；Raw: [本地原文](../raw/sources/2026-08-13-proteantecs-series-b-2019.md)） | $35m、投资者、UCT、近 $50m 累计 | 客户和 traction 未量化 | 2026-08-13 |
| S3 | [Technology](https://www.proteantecs.com/technology)（公司一手；Raw: [本地原文](../raw/sources/2026-08-13-proteantecs-technology.md)） | IP、Agent、集成工具、生产/现场软件、兼容性主张 | 无 PPA/客户/工艺清单独立审计 | 2026-08-13 |
| S4 | [2020 Growth Equity](https://www.proteantecs.com/pressroom/proteantecs-closes-45m-growth-equity-round-led-by-koch-disruptive-technologies-kdt)（公司一手；Raw: [本地原文](../raw/sources/2026-08-13-proteantecs-growth-equity-2020.md)） | $45m、KDT/Valor/Atreides | 无估值、证券条款 | 2026-08-13 |
| S5 | [2021 Growth Extension](https://www.proteantecs.com/pressroom/strategic-investment-in-proteantecs-from-industry-leaders-mediatek-and-advantest-joined-by-porsche-automobil-holding-se-to-advance-electronics-health-monitoring)（公司一手；Raw: [本地原文](../raw/sources/2026-08-13-proteantecs-growth-extension-2021.md)） | $50m extension、战略投资者、$150m 累计 | 历史页面标题/URL 与日期需以正文 2021-09-23 判断 | 2026-08-13 |
| S6 | [2022 Addition Investment](https://www.proteantecs.com/pressroom/proteantecs-secures-45-million-investment-from-addition)（公司一手；Raw: [本地原文](../raw/sources/2026-08-13-proteantecs-addition-2022.md)） | $45m、近 $200m 累计 | 无融资主体/证券细节 | 2026-08-13 |
| S7 | [FuriosaAI adoption](https://www.proteantecs.com/pressroom/furiosaai-enhances-next-generation-ai-chips-with-proteantecs-deep-data-analytics)（公司公告，含客户 CEO 引语；Raw: [本地原文](../raw/sources/2026-08-13-proteantecs-furiosaai-2023.md)） | AI inference chip 采用及预期用途 | 未披露商业和性能指标 | 2026-08-13 |
| S8 | [2025 Series D](https://www.proteantecs.com/pressroom/electronics-monitoring-leader-proteantecs-raises-51m-in-series-d-funding)（公司一手；Raw: [本地原文](../raw/sources/2026-08-13-proteantecs-series-d-2025.md)） | $51m、投资者、地域和产品定位 | 无收入/估值/客户留存 | 2026-08-13 |
| S9 | [Rebellions adoption](https://www.proteantecs.com/pressroom/rebellions-advances-peta-scale-inference-with-protecs-deep-data-monitoring)（公司公告，含客户 CTO 引语；Raw: [本地原文](../raw/sources/2026-08-13-proteantecs-rebellions-2025.md)） | AI accelerator 采用、覆盖 ramp 到部署 | 无合同、规模、独立 KPI | 2026-08-13 |
| S10 | [TGVP strategic investment](https://www.proteantecs.com/pressroom/proteantecs-receives-strategic-investment-from-toppan-group-venture-arm-tgvp)（公司一手；Raw: [本地原文](../raw/sources/2026-08-13-proteantecs-series-d-tgvp-2026.md)） | 战略投资、累计超 $250m、未来合作讨论 | 金额与合同未披露 | 2026-08-13 |
| S11 | [Synopsys Silicon Lifecycle Management](https://www.synopsys.com/solutions/silicon-lifecycle-management.html)（公司一手；Raw: [本地原文](../raw/sources/2026-08-13-synopsys-slm.md)） | EDA/SLM 相邻替代路线 | 未证明与 proteanTecs 某单客户直接竞争 | 2026-08-13 |
| S12 | [Synopsys SLM PVT Monitor IP](https://www.synopsys.com/solutions/silicon-lifecycle-management/environmental-monitors/slm-pvt-monitor-ip.html)（公司一手；Raw: [本地原文](../raw/sources/2026-08-13-synopsys-slm-pvt-monitor-ip.md)） | 相邻嵌入式 monitor IP 路线 | 未进行产品级 benchmark | 2026-08-13 |
| S13 | [proteanTecs Pressroom](https://www.proteantecs.com/pressroom)（公司一手索引） | 多项生态合作线索 | 每项需回到单篇公告核验合同/量产 | 2026-08-13 |
| S14 | [Privacy Policy](https://www.proteantecs.com/privacy-policy/)（公司一手） | ProteanTecs Ltd. 为网站信息处理主体、海法地址 | 不足以确认销售、融资、IP 与合同主体 | 2026-08-13 |

## 冲突与未确认事项

| 事项 | 支持证据 | 冲突/缺口 | 当前处理与下一步 |
|---|---|---|---|
| 法律主体、合同与 IP | 隐私政策使用 ProteanTecs Ltd. 并列海法地址 [S14] | 官网还称有美国、印度、台湾、日本办公室；无注册号、集团图、IP/合同主体 | 只将 ProteanTecs Ltd. 视为网站运营主体；交易前逐份核对签约、IP、雇佣和数据处理实体 |
| 累计融资 | 2021 $150m、2022 近 $200m、2026 超 $250m [S5][S6][S10] | 已公开轮次简单相加与累计口径无法完全对账；2021 是 extension | 保留各公告原文，不自行重算“准确累计”；要求 cap table 与融资交割文件 |
| AI 客户商业化 | FuriosaAI 和 Rebellions 均有实名采用和客户高管引语 [S7][S9] | 无金额、出货量、验收、续费、KPI 或收入确认 | 只称“公开采用”，不称大规模量产/收入；索取客户 consent 后的合同和指标 |
| PPA、节能和可靠性 | 公司称 IP 最小 PPA impact、能实现闭环优化 [S3] | 缺工艺/架构/负载/控制组、误报漏报和第三方数据 | PoC 中以前后对照测量，写入验收阈值；不采用营销比例作为投资模型输入 |
| 生态合作的商业深度 | 多个联盟、合作公告和战略投资 [S3][S5][S13] | 关系可从联盟到量产合同，公开材料常未区分 | 合作网络分层记录；联盟、兼容和讨论均不进入“客户/订单” |
| 数据、安全与出口管制 | 芯片遥测可能含设计、运行状态和故障数据 | 数据存储位置、模型训练权、跨境访问、源代码/加密及以色列/美国出口合规未披露 | 在任何机器人 PoC 前完成 DPA、数据流图、离线部署与安全评估 |

## 产业链分类分析

### 主分类：8 其他 - 半导体全生命周期监测 IP 与分析平台

**判定：主分类为 `8 其他`，细分说明为“半导体全生命周期监测 IP 与分析平台（SLM）”，中等置信。** 这是现有分类表中最准确的承载位，并不代表公司是泛化“其他 AI 软件”。客户的核心购买物是设计期嵌入的硬件监测 IP/Agent、配套集成工具，以及以同一硅数据为输入的生产和现场分析应用；其价值创造围绕芯片/系统健康、功耗、性能、质量和可靠性，而非直接出售算力、模型执行、集群控制面或单一 AI 芯片。

选择该主类也避免将“monitoring”一词误导为 `3.7 监控与健康管理软件`。`3.7` 更适合客户购买通用数据中心/集群可观测性、告警和健康管理软件的公司；proteanTecs 的必要数据源需在 RTL/芯片设计阶段嵌入，且其商业链条还包含 IP、EDA 集成和生产测试。这一差异决定销售时点、技术壁垒、合同结构和收购尽调重点，不能被现场 runtime analytics 的表象遮蔽。

### 次分类：不设正式次分类

不设正式次分类。公司确有 in-field runtime analytics，也公开面向 AI/HPC 和数据中心 RAS；但本轮未取得其作为**独立通用集群监控软件 SKU** 的合同、计费、版本交付或客户验收证据，不满足本库对副分类的准入要求。`3.7` 可作为持续观察项，而非正式副分类。

同样不归入 `1.14 其他 AI 芯片架构`：公司交付的是嵌入客户芯片的监测 IP 和软件栈，不是客户购买其计算架构、加速卡或处理器。也不归入 `2.2 AI 算子开发、迁移与适配`、`5.5 推理及训练运行时优化`、`3.5 调度与编排软件` 或 `8.1 云与 AI 算力服务`，因为公开证据没有显示它以这些能力作为独立客户购买物和收入承载物。

## 方法论说明

本报告采用横纵分析法：纵轴还原公司从创立、产品定义、融资到 AI 客户采用的演进，横轴比较嵌入式监测 IP、EDA/SLM 平台与原厂内化路线，并以两条轴交叉形成投资与协同判断。所有未被公开一手材料直接支持的结论均保留为假设或尽调项。
