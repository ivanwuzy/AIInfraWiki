# Anyscale：把 Ray 从分布式计算项目推向多云 AI 生产平台的横纵分析报告

> 研究截止日：2026-08-11｜研究对象：**Anyscale, Inc.**｜类型：基于 Ray 的分布式 AI 计算与多云编排 SaaS｜建议主分类：**5.3 分布式训练工具（中等置信）**；副分类：**3.5 调度与编排软件（较高置信）**、**5.2 推理框架（中等置信）**。

## 一句话结论

Anyscale 的可交易价值不等于 Ray 的开源热度，而在于把 Ray Data／Train／Serve、集群启动、跨云资源、优先级队列、可观测、安全与支持包成可签约的 Platform Services。它已公开提供 Hosted、BYOC、按量计费和企业 SLA，并有 Physical Intelligence、Bedrock Robotics 等公司官方案例；对机器人企业的现实价值是把多模态数据处理、仿真／训练、批量推理和模型服务放在同一运行时与控制面内。[S1][S4][S5][S8][S9] 但案例和官网性能数字主要来自 Anyscale／客户联合叙述，不能外推为公司收入、所有客户的效果或我方 TCO。2026 年 7 月与 Nscale 签署的“加入”协议尚未完成交割，既可能带来算力协同，也会改变其多云中立性与供应边界。[S10] 建议开展自有数据的受控 PoC；暂缓投资或并购，直至交易完成情况、收入质量、Ray 治理与中国可交付性清楚。

## 研究边界与证据口径

### 目标法人可以确认，但开源项目不能并入其资产负债表

Anyscale 的隐私政策、平台条款和官网页脚均明确使用 **Anyscale, Inc.**；条款将其产品定义为专有 SaaS 平台及相关 SDK／API，并以订单为服务交付依据。[S1][S2] 官网还披露旧金山总部与印度实体 Anyscale India Pvt Ltd；本文只把 Anyscale, Inc. 作为主研究主体，除非资料明确说明资产、合同或员工由其他实体承接。[S2]

Ray 诞生于 UC Berkeley RISELab，后成为由 PyTorch Foundation 治理的开放、社区驱动项目；Anyscale 是 Ray 的创建团队商业公司和重要维护者，但不是 Ray 所有采用者、贡献者、客户和代码的当然权利人。[S2][S6][S10] 下文始终将“Ray 能做什么”“Anyscale Platform 可交付什么”“Anyscale, Inc. 已确认的商业事实”分开。

| 证据等级 | 本报告的含义 | 使用边界 |
|---|---|---|
| A | Anyscale 条款、定价、产品、案例、公告；Ray 官方文档 | 可确认产品表述、合同主体、开源功能和公司自述案例；不等于第三方审计收入或普遍性能。 |
| B | 2020 年公司融资公告 | 可确认当时融资、轮次和公告所列投资方；不替代完整 cap table。 |
| C | 搜索／媒体转述 | 仅作线索；未用来确认未披露轮次、估值、订单或收入。 |

## 纵向分析：从 Berkeley 的通用分布式计算，到 AI 工作负载控制面

### 2016—2019：先解决“Python 如何跨机器运行”，再成立公司

Anyscale 官网将 Ray 的开发置于 2016—2017 年 UC Berkeley RISELab，目标是解决 ML／AI 的扩展难题；2019 年成立 Anyscale，把“生产就绪的 Ray”带给开发者。[S2] 这条源头决定了它没有从 GPU 租赁或单模型 API 起步，而是从任务、actor、对象存储、资源声明和故障恢复等通用分布式原语出发。

这种选择有两面性。它让一套 Python 编程模型有机会覆盖数据、训练、调参、强化学习与服务；也意味着产品必须与 Kubernetes、Slurm、Spark、原生 PyTorch／torchrun，以及云厂商的托管计算争夺控制面。只有将开源框架转成更少的运维、更高的可用性和更明确的资源经济性，Anyscale 才能收取商业溢价。

### 2020：Series B 与第一个托管产品，让“无限笔记本”成为商业化入口

2020 年 10 月，公司宣布由 NEA 领投的 4,000 万美元 Series B，a16z、Foundation Capital 与 Intel Capital 参与；公告称累计融资超过 6,000 万美元，NEA 的 Pete Sonsini 进入董事会。[S3] 同一公告宣布首个商业产品 Anyscale Managed Ray Platform，当时处于 private beta，承诺多云、从笔记本到云的无代码变更扩展以及按需求弹性伸缩。[S3]

这是关键转折：Ray 本身是开发者可自建的开源项目，商业平台则承接集群生命周期、云资源和企业运维。公告中提及 Amazon、Microsoft、蚂蚁集团、Intel 等“使用 Ray”的公司，应理解为项目采用线索，而非 Anyscale 付费客户或订单。[S3]

### 2021—2024：从托管 Ray 集群向覆盖数据、训练、服务的生产套件

Ray 官方文档把库拆为 Ray Data、Ray Train、Ray Tune、Ray Serve、RLlib 与 Ray Core：Ray Train 面向分布式训练并覆盖 PyTorch、Lightning、Transformers、XGBoost、JAX 等；Ray Serve 提供可扩展、可编程的模型 serving，包含部署、路由、autoscaling、观测、Kubernetes 和生产指南；Ray Core 则有资源、placement group、故障容忍与 autoscaler 等机制。[S6][S7]

这些能力说明 Ray 已不是单一训练 launcher。对 AI 团队而言，数据处理、模型训练、推理和服务可以共享 Python／Actor 模型和资源抽象；对平台团队而言，复杂度被转移到资源调度、对象存储、网络、镜像、权限、故障和成本归属。Anyscale 的商业产品恰好在后者加上受管运行时、日志、观测、工作空间、autoscaling、A/B rollout 与集群管理。[S4]

需要避免把开源功能直接当作 Anyscale 收入。Ray Train／Serve 可以由用户自行部署，文档中不少功能仍有版本、配置和生产限制；Anyscale 条款则写明 Platform Services 为 proprietary SaaS、以 object-code SDK／API 交付，具体支持等级由订单决定。[S1][S6][S7] 因此“Ray 很流行”支持技术生态，不足以证明 Anyscale 的毛利、续费或客户锁定。

### 2025—2026：强化多模态、后训练与 Physical AI，同时把平台卖成组织级控制面

现行官网将产品定位为 Foundation Model 相关的多模态数据治理、分布式模型训练、批量 embedding／推理和 post-training；示例明确把 PyTorch、vLLM、SGLang、XGBoost、SkyRL／veRL 等工作负载接入 Ray。[S4] Platform 页面进一步披露多云／多区域、Kubernetes 或 VM、优先级队列、跨团队可见性、GPU 池化、预算、SSO／SAML／SCIM、审计日志、持久化日志和使用归因。[S4]

商业交付边界也较清楚。定价页显示按量计费与承诺合同两条路径；Hosted 使用 Anyscale 托管基础设施，BYOC 可部署在客户自有云或 on-prem，可使用 VM 或 K8s，企业档提供 24×7 覆盖和企业 SLA。[S5] 这证明 Anyscale, Inc. 不是只靠开源社区宣传的团队，而有可签约 SaaS 和私有／自有云交付形态；但页面没有披露实际 ARPU、客户数、毛利、续费或 SLA 赔付。

机器人案例是最值得重视、也最容易被夸大的部分。Physical Intelligence 的案例称 16+ 研发人员使用 Anyscale，利用 AWS 与 GCP 的 Ray 处理每天 TB 级异构机器人传感器数据，并使用受管集群、自动扩缩、可观测和 Ray 专家支持。[S8] Bedrock Robotics 的案例称其使用 Anyscale 覆盖从 MCAP／视频／LiDAR 到标注、训练和部署，案例口径为 2025 年从 2 万扩至 170 万 compute hours、80% spot、成本下降 40% 及 15,000 次 spot interruption 自动处理。[S9] 这些是公司发布的客户案例，能确认客户关系与场景，但指标没有独立审计，且不等同于 Anyscale 对所有机器人工作负载的承诺。

### 2026 年 7 月：拟加入 Nscale，平台的中立性与资源禀赋同时被重写

2026 年 7 月 30 日，Anyscale 宣布签署 definitive agreement “to join Nscale”。公告称交易完成后客户将获得 Nscale 算力资源，Platform 仍将运行在主要云上；也称 Nscale 计划成为 PyTorch Foundation 白金成员，并强调 Ray 的开放与可移植性。[S10] 公告同时称过去一季收入环比增长超过 70%，但没有绝对收入、客户构成、留存和审计口径，应严格作为公司自述的增长信号。

这不是已经完成的并购事实。交割时间、对价、股权／现金结构、监管条件、员工与客户合同承接、对多云定价和硬件优先级的影响均未披露。[S10] 对机器人采购者来说，Nscale 的 GPU 供给和数据中心协同可能改善容量与软件—硬件联合优化；同时也可能把原本中立的多云控制面推向特定 neocloud，需要在合同中保护可移植性和退出权。

## 融资与资本事件：保留公开口径，不编造后续轮次

| 时间 | 事件 | 金额／原始口径 | 公开投资方／交易方 | 边界 |
|---|---|---:|---|---|
| 2020-10-21 | Series B | **4,000 万美元**；公告称累计融资**超过 6,000 万美元** | NEA 领投；a16z、Foundation Capital、Intel Capital 参与 | 公司公告；未披露各方持股、估值或此前轮次明细。[S3] |
| 2026-07-30 | 签署加入 Nscale 的 definitive agreement | 未披露 | Nscale | 尚待交割；不是融资，也不可据此重建 Anyscale, Inc. 当前股权或估值。[S10] |

本轮没有取得可追溯的一手材料去确认 2020 年后任何新增融资、估值、债务、二级交易或收入。故不采用聚合数据库／媒体对后续轮次的数字。现有投资人名单也不是截至研究日的股东名册。

## 五类合作网络：客户、投资人、开源伙伴不混写

### 1. 投资方／股东

已确认的 2020 B 轮机构为 NEA、a16z、Foundation Capital、Intel Capital。[S3] 这证明当时的融资关系，不证明现在仍持股、持股比例或控制权。Nscale 是待完成交易对手，不应在交割前写作 Anyscale 母公司。[S10]

### 2. 客户／订单

Physical Intelligence 与 Bedrock Robotics 是 Anyscale 官网公开的具体案例，因此可以认定为客户／使用关系的强线索，而非仅 Ray 用户。[S8][S9] 但案例没有合同金额、期限、回款、排他性、服务层级或续费数据；正文中的性能／成本改善也应限定为案例当事方口径。官网列出的其他案例和“world's best”客户不构成订单簿。[S4]

### 3. 产业、云与供应链合作

平台公开支持 AWS、GCP、Azure、Nebius、CoreWeave 等资源环境，并提供 Hosted、BYOC、客户自有云／on-prem 和云市场结算路径。[S4][S5] 这是可交付的多云运行范围，非对所有云区、GPU、网络拓扑与 SLA 的保证。Nscale 协议带来潜在资源合作，但在 closing 前不可认为已经取得 Nscale GPU 容量、优惠价或技术整合。[S10]

### 4. 技术与开源网络

Ray 已在 PyTorch Foundation 治理下，公告列出 Google、NVIDIA、Microsoft、Red Hat、Alibaba 与社区对 GPU／TPU 支持、拓扑调度、Kubernetes 等的贡献。[S10] 这增强了技术生态，却要求穿透商标、贡献者协议、maintainer 权限和商业平台的闭源增量，不能把社区贡献全部确认为 Anyscale, Inc. 的独占 IP。

### 5. 高校与科研渊源

Ray 由 UC Berkeley RISELab 开发，RISLab 是 AMPLab 的继任者；Anyscale 创始叙事与 Berkeley 分布式系统传统直接相连，Ion Stoica 作为联合创始人／执行主席、Robert Nishihara 作为 CEO 被公司公告点名。[S2][S3] 这说明人才与研究谱系，而非自动完成学校成果转让或商业 IP 权属证明。

## 横向分析：平台的真正对手是“自建 + 多套专用工具”，而不只是另一款训练库

| 对照 | 主要位置 | 与 Anyscale 的结构差异 | 对机器人团队的取舍 |
|---|---|---|---|
| 自建 Ray + Kubernetes／Slurm | 可免费使用 Ray，自行负责 cluster、镜像、监控、权限和故障 | Anyscale 的商业价值是受管 runtime、工作空间、调度、可观测、支持与多云控制面 | 平台团队强、拓扑固定时自建有成本控制优势；团队小、工作负载变化快时可评估 Anyscale 的运维节省。 |
| PyTorch／torchrun、DeepSpeed 等训练栈 | 针对训练通信与框架深度优化 | Anyscale／Ray 更宽，覆盖数据、rollout、训练、服务；在超大模型通信效率上不能仅凭平台叙事胜出 | 训练内核和并行策略仍用各框架 benchmark；把 Ray 用于作业编排、数据与异构工作流。 |
| Databricks／Spark 型数据平台 | 大数据、治理与企业数据湖生态 | Ray 更偏 Python 原生、GPU／多模态和 actor；Spark 对纯表格 ETL 的成熟生态仍强 | 视频、MCAP、LiDAR、VLM 调用的 CPU—GPU 混合流水线适合优先验证 Ray；结构化 ETL 不宜强制迁移。 |
| Kubeflow／Argo／云原生 MLOps | Kubernetes 上的流水线与部署控制 | Anyscale 提供 Ray-aware 资源调度与受管用户体验，但更依赖 Ray 编程模型 | 若已有成熟 K8s 治理，应测集成、权限、日志与可迁移性，不为替换控制面而替换。 |
| vLLM／SGLang／托管推理平台 | 侧重模型 serving 性能或 API | Ray Serve 是通用服务／组合层，Anyscale 可调度推理工作负载；它不天然等于最优推理引擎 | 将 vLLM／SGLang 作为模型执行层，Ray／Anyscale 负责 rollout、批处理、服务编排与资源治理；用端到端 SLO 比较。 |

Anyscale 的优势来自“同一 Python 控制面覆盖多阶段 AI 工作负载”，而不是每一层都超过专用系统。Bedrock 的案例体现了混合 CPU／GPU、视频／LiDAR、标注／训练和 spot 队列在一个平台上的组织价值。[S9] 短板也在这里：平台跨度越大，用户越需理解资源模型、数据位置、对象存储、GPU 兼容性、故障语义和成本归属；单一模型在线服务或纯训练任务未必需要整个控制面。

## 横纵交汇：Ray 的开放性是护城河，也是商业边界

Ray 从 Berkeley 的分布式计算项目走到今天的多云平台，给 Anyscale 提供了罕见的开发者入口。数据、训练、RL rollout 和服务使用同一 actor／资源模型，机器人公司正好有这类贯通任务：从原始机器人日志、视频与 LiDAR，到标注、仿真、训练、验证和发布。[S4][S8][S9]

但同一历史也决定了不能把 Ray 的成功全部估进 Anyscale。开放项目可由用户自行部署，PyTorch Foundation 治理又强化其可移植性；Anyscale 必须在运行可靠性、观测、治理、资源经济与支持上持续提供开源版难以低成本复制的价值。[S1][S6][S10] Nscale 交易可能强化硬件供给，却会放大“开放多云”承诺与垂直整合之间的张力。

| 剧本 | 路径 | 应观察的证据 | 我方行动 |
|---|---|---|---|
| 基准：生产控制面稳定扩张 | Platform 在 BYOC／多云中以支持、可观测、队列和成本治理收取软件服务费 | 交易交割、客户续费、SLA、支持响应、成本／失败率的我方复测 | 从非关键数据管线和仿真 batch PoC 切入，保留自建 Ray 退路。 |
| 上行：Physical AI 工作负载形成优势 | 多模态数据、RL 与模型服务的统一调度带来显著研发周期收益，Nscale 提供更优算力协同 | 真实 VLA 训练／rollout 的 TCO、迁移工时、spot 恢复、数据合规和可移植性 | 达成硬指标后签 BYOC 企业协议；再考虑小比例战略合作。 |
| 下行：开源／大云吞没商业溢价 | 企业自建 Ray、K8s 或云厂商覆盖多数控制面，Nscale 交易削弱客户对中立性的信任 | 平台粘性下降、价格折扣增加、维护者流失、云／区域支持收缩 | 不投资、不整体并购；只保留开源 Ray、标准工作流与多供应商资源。 |

## 面向人形机器人公司的建议

### 采购：启动 8—12 周 BYOC PoC，而不是直接迁移全部训练平台

优先在我方 VPC／保留 GPU 上测试 BYOC，避免第一阶段把机器人数据移至托管环境。[S5] 选一条端到端但非安全关键的工作负载：MCAP／视频／LiDAR 解包与筛选 → VLM／规则标注 → Ray Data 生成训练集 → Ray Train 或原有 PyTorch 训练 → Ray Serve／vLLM 离线评测。与自建 Ray + K8s／Slurm 进行盲测，记录：

1. 数据处理吞吐、标注质量、训练收敛和任务成功率；
2. 提交到启动时间、GPU 利用、排队公平、spot 中断与恢复、节点失败；
3. 平台工程人天、可观测性、调试时间、账单归因和全周期 TCO；
4. 数据驻留、模型权重、日志、权限、删除、导出和退出能力。

不可把 Bedrock 的 80% spot、40% 降本或 85 倍扩展预先设为验收目标；它们只可作为问题清单和案例方口径。[S9]

### 合作：把 Ray 用作编排层，不押注其替代所有训练／推理内核

Ray Train 可以协调分布式作业，但不应在未测通信与内核效率前替换 DeepSpeed、Megatron 或原有 torchrun；Ray Serve 可编排线上服务，但对低延迟 VLA 推理应与 vLLM／SGLang／原厂栈同负载比较。[S6][S7] 合作合同应明确支持小时、故障责任、SLA、数据处理、优化服务是否会调用第三方 AI 服务、开源与专有模块边界，以及 Nscale 交易完成后对云、区域、价格和出口的承诺。[S1][S5][S10]

### 投资、并购与自研：现在买“能力期权”，而不是买开源叙事

当前不建议整体并购或以 Ray 采用度为基础投资。首先核验 Nscale 交易的对价、交割、控制权与客户合同迁移；其次取得 Anyscale, Inc. 的收入拆分（Hosted／BYOC／支持／优化服务）、毛利、前十客户续费和云集中度；再审查 Ray 商标、治理、核心 maintainer、商业闭源模块和学校／员工 IP 链。[S1][S10]

我方需要自研／自持的部分是作业定义、数据与模型元数据、机器人仿真与安全评测、成本账本、供应商无关的 observability 和部署导出接口。Anyscale 可被定位为可替换的生产控制面，而非机器人数据闭环、端侧安全或核心模型运行时的唯一所有者。

## 冲突、未知项与下一步尽调

| 事项 | 已知证据／反证 | 影响 | 下一步 |
|---|---|---|---|
| Nscale 交易是否交割及具体条件 | 仅有 definitive agreement 与 post-closing 承诺。[S10] | 决定控制权、中立性、算力供给和合同承接 | 获取签约／closing 文件、客户通知、监管条件及多云承诺。 |
| Ray 开源权属与 Anyscale 专有层边界 | Ray 开放治理；条款定义 Anyscale 专有 Platform Services。[S1][S6][S10] | 决定并购／投资时可购买的资产 | 审阅商标、贡献者协议、许可证、源码清单和 maintainer 权限。 |
| 客户案例是否可代表我方收益 | PI／Bedrock 公开案例，但均含供应商陈述。[S8][S9] | 不可直接推 TCO、可靠性或订单规模 | 客户访谈、我方 PoC、合同／续费与 incident 数据。 |
| 训练规模和性能边界 | 官网示例与 Ray 文档展示功能；未见我方模型／硬件的独立测评。[S4][S6] | 影响 5.3 主分类的经济价值 | 在 VLA、视频模型和 RL rollout 上与 torchrun／Slurm 对照。 |
| 私有化、数据与中国交付 | BYOC／on-prem 有公开支持；具体区域、XPU、数据跨境和支持响应未披露。[S5] | 决定采购可行性与供应安全 | 取得支持矩阵、DPA、子处理方、区域与国产 XPU 计划。 |

## 产业链分类复核（按实际交付）

**主分类：5.3 分布式训练工具（中等置信）。** Anyscale 平台明确把分布式模型训练、elastic scaling、训练可观测、Ray Train 和 post-training 列为可运行工作负载，并提供 Hosted／BYOC／on-prem 交付与订单化 SaaS 条款。[S1][S4][S5][S6] 主类置信度非“高”，因为 Ray Train 本身是开源组件，公开资料没有分拆 Anyscale, Inc. 由训练工具产生的收入、客户规模或同一模型上的独立训练效率。

**副分类：3.5 调度与编排软件（较高置信）。** Platform 页面直接披露跨云／区域、K8s／VM、priority-aware scheduling、队列、GPU 资源池、autoscaling、集群健康／利用率监控与预算归因；Bedrock 案例也具体描述其工作负载调度器和队列可视化。[S4][S9] 这是 Anyscale 专有平台实际交付的组织级控制面，不只是 Ray 的开源功能。

**副分类：5.2 推理框架（中等置信）。** Ray Serve 官方文档涵盖模型服务部署、路由、autoscaling、生产监控和 Kubernetes；Anyscale 平台把 online／batch inference、vLLM／SGLang 接入和模型部署列为工作负载。[S4][S7] 但它更像服务编排／运行平台而不是专用推理 kernel／引擎，且缺少 Anyscale 自身推理收入和独立性能证据，故仅设中等置信副类。

## 来源审计

| 编号 | 来源 | 日期／性质 | 用途与限制 |
|---|---|---|---|
| S1 | [Anyscale 平台条款](https://www.anyscale.com/terms) | 官网法律文件；2026-08-11 访问 | 确认 Anyscale, Inc.、专有 SaaS、订单、数据／支持边界。 |
| S2 | [About Anyscale](https://www.anyscale.com/about) | 官网；2026-08-11 | 2016—2017 Ray、2019 成立、地点、Nscale 入口。 |
| S3 | [Series B 公告](https://www.anyscale.com/blog/anyscale-announces-usd40m-in-series-b-funding-led-by-nea) | 2020-10-21，官网 | 4,000 万美元 B 轮、累计超过 6,000 万美元、首个商业产品；Ray 用户不等于客户。 |
| S4 | [Anyscale Platform](https://www.anyscale.com/platform) | 官网；2026-08-11 | 训练、数据、服务、调度、观测与多云产品自述。 |
| S5 | [定价与部署模式](https://www.anyscale.com/pricing) | 官网；2026-08-11 | Hosted、BYOC、on-prem、计费与支持层级。 |
| S6 | [Ray 官方文档](https://docs.ray.io/en/latest/train/train.html) | 官方文档；2026-08-11 | Ray Train、训练生态、开源功能边界。 |
| S7 | [Ray Serve 官方文档](https://docs.ray.io/en/latest/serve/index.html) | 官方文档；2026-08-11 | Serve、路由、autoscaling、生产部署能力。 |
| S8 | [Physical Intelligence 案例](https://www.anyscale.com/resources/case-study/physical-intelligence) | 官网客户案例；2026-08-11 | 机器人数据处理与客户关系线索；指标未审计。 |
| S9 | [Bedrock Robotics 案例](https://www.anyscale.com/resources/case-study/bedrock-robotics) | 官网客户案例；2026-08-11 | 多模态流水线、队列、spot、成本／规模的案例口径。 |
| S10 | [Anyscale 签署加入 Nscale 协议](https://www.anyscale.com/blog/anyscale-signs-definitive-agreement-to-join-nscale) | 2026-07-30，官网 | 待交割交易、开放治理、多云承诺和公司自述增长。 |

> 方法说明：本报告按横纵分析法追踪 Ray 的研究起源、Anyscale 的产品化和 Nscale 交易，并以自建 Ray／K8s、训练框架、数据平台与推理栈做当前截面对照。所有公开客户案例、平台性能与增长表述均保留其来源性质，未等同为审计收入或我方验收结果。
