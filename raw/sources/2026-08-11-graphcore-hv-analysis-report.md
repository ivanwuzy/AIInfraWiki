# Graphcore Limited 横纵分析报告

> 研究截止：2026-08-11｜研究对象：Graphcore Limited（英国公司号 10185006）｜类型：AI 加速器与计算平台公司｜主研究问题：其 IPU 技术、软件资产与 SoftBank 收购后的组织状态，对人形机器人公司的训练、推理、供应安全和潜在交易有何实际价值？

## 结论先行

Graphcore 是一家把“图执行”从软件隐喻做成芯片、互联和编译器共同约束的英国 AI 加速器公司。它的 IPU（Intelligence Processing Unit）不是 GPU 的小改型：其公开技术材料强调大量独立处理单元、片上交换网络、片上存储和 MIMD（multiple instruction, multiple data）执行；对应的软件不是 CUDA 翻译层，而是 Poplar 图编译与运行时，以及 PopTorch、PopART、PopLibs、PopVision 等一组紧耦合工具。[S10][S11][S12]

这条路线在 2016—2022 年形成了很完整的“芯片—POD—云—开发框架”闭环，也因此有真实的技术遗产和人才价值；但它没有变成能与 NVIDIA CUDA 在模型、云、渠道和开发者规模上对称竞争的平台。2024 年 SoftBank 已将其全资收购，故其不再是可供普通财务投资者进入的独立一级市场标的。[S1] 对人形机器人公司，推荐结论是：**不做其硬件的生产主力采购，不把其作为自研训练芯片的直接蓝图；可在 SoftBank 同意的前提下，以“有退出条件的小规模联合验证/人才与工具链尽调”为主，重点验证图编译、细粒度并行、稀疏/图网络和多芯片映射能力。**

这不是对 IPU 工程质量的否定。它是对交易对象、生态切换成本和供货连续性作出的排序：一个已经被集团全资整合、核心创始技术负责人已离任公司董事会、且公开资料仍以旧代 SDK 与旧代产品文档为主的供应商，不能仅因架构有趣就承担机器人长期训练栈的单点风险。[S2][S7][S18]

## 一句话定义

**Graphcore Limited 是 SoftBank 全资的英国 AI 计算公司：它以 IPU 芯片和 IPU-POD 系统销售/交付图执行型训练与推理计算，并以 Poplar SDK 把 PyTorch、TensorFlow、ONNX 等工作负载编译到这一非 GPU 架构上。**[S1][S10][S11]

## 研究边界、证据口径与核心事实索引

本报告将“公司公告的性能或客户说法”“法定登记”“第三方论文/开源代码”分开写。公司公告能证明其在某日发布、合作或宣称了某项能力，不能单独证明跨工作负载的性能优势、持续订单或 2026 年仍可采购的 SKU。报告中 `[S#]` 均可在文末“信息来源”定位到可访问 URL；载荷事实、金额和日期均在邻近段落标注来源。

| 结论/事实 | 证据等级 | 可支持的最窄结论 |
|---|---:|---|
| Graphcore 于 2024-07-11 被 SoftBank Group 收购并成为全资子公司、保留 Graphcore 名称 | A，一手公司公告 | 控制权发生了变化；公告未披露交易价格 [S1] |
| 公司号 10185006 的主体为 GRAPHCORE LIMITED；2026 年有董事任免/股份配发记录 | A，英国 Companies House 法定档案 | 主体仍有持续法定申报；不能由此推导收入或产品订单 [S2] |
| 2020 年 Series E 为 2.22 亿美元，公告称累计融资超过 7.10 亿美元、投后估值 27.7 亿美元 | A，一手融资公告 | 这是 2020-12-29 时点的融资与估值口径，不是 2026 年价值 [S7] |
| GC200 有 1,472 个并行处理核和 900 MiB 片上存储 | B，创始 CTO 在 Hot Chips 的公司转述 | 是公开架构规格；不是端到端模型性能承诺 [S9] |
| Poplar/PopLibs/PopTorch 提供编译、运行时、库、PyTorch/TF 接口和自定义算子路径 | A/B，官方文档、开源 README、Hugging Face 集成 | 平台功能有可复现的代码与文档证据；版本与当前支持生命周期需另行核验 [S10][S11][S12][S13] |
| 学术微基准发现 IPU 的存储、片内/片外互连与实际性能需要按应用通信/计算模式理解 | B，独立 arXiv 论文 | 不支持“IPU 在所有模型上胜过 GPU”的泛化结论 [S14] |

## 一、纵向分析：从“图”这个信念到 SoftBank 子公司

### 1. 萌芽期（2012—2016）：创始人不是从模型出发，而是从计算机该怎样被调度出发

Graphcore 的起点早于法律主体。Nigel Toon 在 2026 年离任信中回忆，他与 Simon Knowles 在 2012 年开始讨论后来成为 Graphcore 的构想，2012—2014 年拜访早期 AI 研究者，2014—2016 年搭建团队；该信将两人共同创办公司称为 2016 年 7 月。[S18] Companies House 的公司号页面则显示 Graphcore Limited 的注册日为 2016-05-18。[S2] 这两种日期不必强行裁成一个：前者更像创始叙事/运营启动，后者是法律主体登记；但在正式尽调中应以公司号与股权文件为准。

两位共同创始人的经历解释了路线选择。Toon 在 Graphcore 的人物页上列示，他曾参与创办蜂窝基带公司 Icera，Icera 于 2011 年被 NVIDIA 以 4.35 亿美元收购；Knowles 则曾共同创办 Element14（2000 年被 Broadcom 收购）和 Icera，并被公司表述为 Colossus IPU 的原始架构师。[S16][S17] 这是一支典型的英国无晶圆厂处理器创业组合：熟悉芯片设计、软件、融资和被大公司收购的路径，却没有一家大型云平台天然带来的内部负载、渠道和软件生态。

其核心判断有四条：AI 不会只等同于大矩阵乘；模型图里有大量不规则控制、稀疏、短算子和依赖；数据要尽量留在靠近计算的片上存储；调度应该由图编译器把计算和通信一起铺开。[S18] 这并非后来为了营销而补的术语。公司名称中的 “Graph” 与 Poplar 的图执行语义是同一件事：把模型图映射到大量 tile，预先安排数据移动与执行，而不是把一连串通用 kernel 交给一个通用 GPU 运行时临场调度。

这也埋下了后来最重要的双刃剑。对图网络、稀疏或需要细粒度并行的研究型负载，专用映射可能带来效率和表达力；对已经把 CUDA/PyTorch 生态、调试习惯、模型仓库和云采购流程固化的企业，迁移成本会直接落在编译、算子、分片和工程团队身上。Graphcore 从第一天起就在同 NVIDIA 比“完整系统”，而不只是同它比一颗芯片。

### 2. 出隐身与原始资本（2016—2017）：先把人才和软件一起筹齐

2016-10-31，Graphcore 出隐身并公告约 3,000 万美元 Series A。公告说团队已在隐身状态工作两年，目标是让机器学习更快、更易用，并把 AI 加速从云延伸到低功耗终端；同时列举了 Amadeus、Foundation、Pitango、Draper Esprit、C4、Bosch、Samsung 和 Dell Technologies Capital 等投资方。[S3] 2017 年公司宣布由 Atomico 领投的 3,000 万美元 Series B，并披露 Demis Hassabis、Greg Brockman、Ilya Sutskever、Pieter Abbeel、Scott Gray、Zoubin Ghahramani 等个人参与者。[S4]

这轮资本结构有一个值得投资者留意的特点：既有半导体/产业投资人，也有机器学习意见领袖。它对早期产品定义很有帮助——IPU 要服务的不是传统 HPC 的单一线性代数，而是当时迅速涌现的 NLP、视觉、强化学习和图网络——但个人 AI 名流入股不等于其机构或其所在模型公司成为客户。报告将这些人严格归入“投资/背书”，不列为订单或合作。

早期的商业选择同样清晰：Graphcore 并未先做一张可插拔、完全兼容 CUDA 的卡，而是同时投芯片、服务器、编译器和框架适配。这令初创公司在还没有销售规模时就承担了很高固定成本，却也避免了“硬件交付后等别人来写软件”的死局。其后所有融资的真正用途，正是填这条全栈曲线。

### 3. 首代商业化与渠道试验（2018—2019）：从 C2 卡走到 Azure 预览

2018 年是从原型进入交付的一年。Graphcore 2018-12-18 公告一笔 2 亿美元融资，称公司估值 17 亿美元、累计融资超过 3 亿美元，并称已在此前几个月从 IPU Processor 产品产生收入；投资方包括 Atomico、Sofina、Merian、Amadeus、Bosch VC、C4、Dell Technologies Capital、Draper Esprit、Foundation、Microsoft 与 BMW 等。[S5] 同年与 Dell 展示的首个企业 IPU appliance 由 8 张 C2 PCIe 卡构成，每张卡有两颗 Colossus GC2；公告称其为早期量产批次并已有订单簿。[S15]

这里要把三个层次分开。第一，C2/GC2 证明首硅和系统工程确实跨过了“可演示”门槛。第二，Dell 的 OEM/渠道关系给了企业数据中心可信的服务器整合路径。第三，公告中的“订单簿”没有披露客户名称、数量、收入确认或复购，因此不能把它换算为大规模商业成功。[S15]

2019-11-13，Microsoft 与 Graphcore 公告将在 Azure 上预览 IPU；原文称双方已合作两年以上，Azure 团队针对机器视觉和 NLP 在 IPU 上优化，并以一套含 8 张 C2 卡的 IPU Server 完成 BERT Base 训练 56 小时作为示例。[S6] 这是 Graphcore 最有象征意义的节点：一家主要公有云把非 GPU 加速器引入云端，技术可信度大幅提高。但它的措辞是 **preview**，不是长期、广泛、标准化 Azure SKU 的承诺。后续评估不得把此事件写成“Microsoft Azure 的常规 IPU 服务已持续至今”。

2018—2019 的决策逻辑可以概括为“借成熟厂商完成自己没有的部分”：Dell 提供服务器/OEM 渠道，Microsoft 提供云和真实研发负载。这种合作能缩短进入市场的时间，却没有改变 Graphcore 对客户而言仍需维护独立软件栈的事实。

### 4. 资本高峰与第二代产品（2020—2022）：IPU 从芯片名字变成 POD 平台

2020 年初，Graphcore 将 2018 年 2 亿美元融资延伸为额外 1.5 亿美元 primary placement，称累计投资超过 4.5 亿美元、最近估值 19.5 亿美元、交易后现金超过 3 亿美元。公告同时将 2019 定义为从研发转向“volume production products shipping”，点名 Microsoft、Dell、Cirrascale，以及早期访问客户 Citadel、Carmot Capital、Qwant。[S8] 对这些名称，报告只确认“公司披露为合作/早期访问”，不提升为持续、大额采购事实。

2020-12-29 的 Series E 进一步融资 2.22 亿美元，由 Ontario Teachers’ Pension Plan Board 领投，Fidelity International 与 Schroders 新加入；公告称累计融资超过 7.10 亿美元、交易后现金预计超过 4.40 亿美元、投后估值 27.7 亿美元。[S7] 因此 27.7 亿美元是疫情前后 AI 硬件估值高点下的私募投后口径，既不等于后来 SoftBank 的收购价格，也不等于可用于机器人并购估值的可比交易倍数。

同一时期，产品换代把“并行计算主张”具化。公司 CTO 的 Hot Chips 2021 演讲摘要称 Colossus GC200 有 1,472 个并行处理核和 900 MiB 片上存储，并讨论 tile、冗余、Bulk Synchronous Parallel（BSP）、片内与系统级带宽以及 DRAM 交换内存的取舍。[S9] IPU-M2000、IPU-POD 16/64/128/256 等产品把单芯片扩展到 POD；2021 年与 Cirrascale 推出 Graphcloud 时，官方列示 POD16 含 16 个 GC200、标称 4 PFLOPS，POD64 含 64 个 GC200、标称 16 PFLOPS。[S19] 这些是硬件拓扑/公司标称规格，不与 NVIDIA 的不同精度、不同批量 MLPerf 测试作直接横比。

软件栈在这一阶段也成熟为可审计资产。官方 2020 文档描述：PyTorch 与 TensorFlow 被扩展为支持 IPU，PopART 面向 ONNX 训练/推理，底层 Poplar 及 Graph Compiler 负责图构建与执行。[S10] 同年开源 PopLibs、PopART 和 IPU TensorFlow，2022 年发布 Poplar SDK 3.1，支持 PyTorch 1.13、TensorFlow 2 自动 loss scaling 等。[S11][S12] 在 GitHub 的 PopLibs README 中，可见 Poplin（矩阵乘/卷积）、Popnn、Popops、Poprand、Popsparse、Popfloat、Poputil 等库，以及允许客户阅读和扩展代码以创建 custom operations 的说明。[S12]

产品层面第二代的另一个节点是 Bow IPU。Graphcore 2022-11-09 公告称，Argonne National Laboratory 的 ALCF AI Testbed 将部署 22 PFLOPS Bow Pod 64，供科研人员通过测试平台使用。[S20] 这支持“Bow 已被科研设施部署”的结论；它不证明有大规模企业订单，更不能替代生产可靠性、供货期限或对机器人 VLA 的实测。

### 5. 开发者入口、研究生态与商业张力（2021—2023）：能进云，不等于能成为默认平台

为了让开发者接触 IPU，Graphcore 扩展了几条入口。2021 年成为 Hugging Face Hardware Partner Program 的创始成员之一，并以 Optimum Graphcore 将 Transformer 模型、模型并行和训练/推理接入 Hugging Face 工作流。[S21][S13] 2022 年 G-Core Labs 宣布在欧洲建设基于 IPU 的 AI 云，2023 年 Paperspace Gradient 推出按需付费 notebook、六小时免费算力和 IPU 优化模型。[S22][S23] 这是一种很务实的补生态方法：不是要求所有人买 POD，而是先把实验、微调和 notebook 带进来。

从开发者的角度，Graphcore 的优点也很具体。`graphcore/examples` 公开目录覆盖 NLP、视觉、语音、多模态、GNN、仿真、推荐、强化学习和稀疏等，并给出 BERT、ViT、GPT-J、GPT-3 175B 等例子；PopTorch README 明确支持在 IPU 上训练、评估和使用 PyTorch 模型及 PyTorch Geometric。[S13][S24] 这比“只支持固定 demo”的专用 ASIC 成熟得多。

代价同样具体。PopTorch 的安装说明要求 Poplar SDK，wheel 不包含 PopART/Poplar 二进制，用户必须启用相应环境；其开源分支/示例 README 还明确写了 Ubuntu 20.04、Python 3.8 和 Poplar 3.2/3.4 的约束。[S12][S24] Hugging Face 的接口示例虽能把 `Trainer` 换为 `IPUTrainer`，却仍需要 IPUConfig、模型并行设置与 Poplar 环境。[S13] 这不是“体验不好”的主观评价，而是可观察的迁移工作量：训练代码、算子行为、版本兼容和性能调优并非零成本。

独立论文给出更冷静的参照。2019 年的微基准研究并不替 Graphcore 背书，它对 IPU 的存储层次、点对点/集体通信和矩阵乘、卷积等实际性能进行测量，并强调应以应用的计算—通信步骤来预测表现。[S14] 2021 年宇宙学应用论文将 MK1 IPU 与 NVIDIA V100 用于三个具体任务，结论是 IPU “could be a potential avenue”，而不是一刀切地胜出。[S25] 这恰好说明 IPU 的真正竞争单位是 **经过重构和映射的工作负载**，而不是芯片参数表。

### 6. 2024—2026：从独立融资故事切换为集团工程资产

2024-07-11，Graphcore 宣布被 SoftBank Group 收购，成为 SoftBank 全资子公司并继续使用 Graphcore 名称。[S1] 收购公告把动机放在基础模型、生成式 AI、科学发现与下一代半导体/计算系统，并没有公开交易对价、产品路线、客户合同或与 Arm/SoftBank 其他资产之间的权利安排。因此此交易可以确认“控制权与资金来源变化”，不能确认“SoftBank 已承诺量产某一新 IPU”或“Graphcore 将进入某个特定大项目”。

收购后的可见信号表明工程团队没有被直接关闭。2025-10-09 的公司公告称将在印度班加罗尔建设 AI Engineering Campus、十年最高投资 10 亿英镑、创造 500 个半导体岗位，并称英国团队将加倍至约 750 人。[S26] 2026-07-31 的 Toon 离任信则称公司接近 1,000 名员工，并已在 Austin 与 Bengaluru 开设主要研发中心、扩展台北/新竹、格但斯克、剑桥和伦敦等点位。[S18] 这两份都是公司自述，代表招聘和组织意图/状态，不能等同于产品收入。

反过来，创始与治理连续性在下降。Toon 在 2026-07-31 宣布辞去 Executive Chair；Companies House 随后记录其于 2026-07-30 终止董事任职。公司注册档案还记录 Simon Knowles 于 2025-08-20 终止董事任职。[S18][S2] Graphcore 主页的静态个人页仍把 Toon 写作 CEO/Chairman、Knowles 写作 Founder & CTO，团队页仍列 Toon 为 Executive Chairman，故不应用这些页面判断 2026-08-11 的真实管理层；这是一项需要向 SoftBank 直接核验的资料陈旧冲突。[S16][S17][S27]

纵轴到这里发生了真正的结构转折。2016—2023 年，Graphcore 的核心问题是“能否用融资和合作做出独立的第三条计算平台”；2024 年以后，核心问题改成“SoftBank 将怎样把一个有芯片、编译器和系统团队的资产，嵌入其更大的 AI 基础设施与半导体布局”。前者可用融资、客户和出货来评估，后者必须看集团路线、内部资源配置、知识产权边界和产品使命。两套估值框架不能混用。

## 二、融资历史与合作网络

### 融资历史：只保留公告原口径

| 日期 | 事件与金额 | 参与方/口径 | 证据与解读 |
|---|---|---|---|
| 2016-10-31 | Series A，约 **$30m** | Amadeus、Foundation、Pitango、Draper Esprit、C4、Bosch、Samsung、DTC 等 | 公司出隐身公告。2017 年另一篇文章写作 $32m，见冲突表；本表保留首次公告 $30m [S3] |
| 2017-07-20 | Series B，**$30m** | Atomico 领投；多位 AI 研究者个人参与 | 可确认投资，不把个人投资人写成客户 [S4] |
| 2018-12-18 | 新一轮 **$200m**，公司称累计超 $300m、估值 $1.7bn | Atomico、Sofina、Merian 与既有投资人，Microsoft/BMW 在公告投资者名单内 | 公司后文称为 2018 Series D；属于公司融资口径 [S5][S8] |
| 2020-02-25 | 在 2018 轮上追加 **$150m** primary placement | Baillie Gifford、Mayfair、M&G 等；公司称累计超 $450m、最近估值 $1.95bn | 不另造 “Series D2” 作为法定轮次；这是公司文字中的延伸/追加 [S8] |
| 2020-12-29 | Series E，**$222m** | Ontario Teachers’ Pension Plan Board 领投；Fidelity、Schroders 新入 | 公司称累计超 $710m、投后估值 $2.77bn、交易后现金预计超 $440m [S7] |
| 2024-07-11 | SoftBank 全资收购，**价格未披露** | SoftBank Group | 不以 2020 投后估值或媒体估计替代收购价格 [S1] |

融资总额存在自然的时间口径差异：Toon 的 2026 离任信说“over $600m”，2020 Series E 公告说“over $710m”。前者是回顾性概数，后者是融资当日的精确公告口径；报告优先用后者，不将差额解释为资金消失。[S18][S7]

### 合作网络一：投资方/股东与控制关系

| 关系方 | 关系类型 | 证据强度 | 可确认内容 | 不可确认内容 |
|---|---|---:|---|---|
| SoftBank Group Corp. | 全资母公司 | A | 2024-07-11 收购，Graphcore 成为全资子公司 [S1] | 交易价格、内部预算、与 Arm 的具体产品整合 |
| Atomico、Sofina、Ontario Teachers’、Fidelity、Schroders 等 | 历史股权投资方 | A | 分别出现在各轮公司公告中 [S4][S5][S7] | 收购后是否仍持股、退出对价 |
| Microsoft、BMW、Dell Technologies Capital、Bosch VC 等 | 历史战略/财务投资方 | A | 2016/2018 公告列为投资者或参与者 [S3][S5][S15] | 投资是否必然对应采购、排他或联合研发权 |
| Demis Hassabis、Ilya Sutskever 等 | 个人投资/背书 | A | 2017 Series B 公告列为个人投资者 [S4] | 其所属机构成为客户或技术伙伴 |

### 合作网络二：客户/订单与使用方

| 对方 | 公开关系 | 证据强度 | 可以写到哪里 | 不能写成什么 |
|---|---|---:|---|---|
| Microsoft/Azure | 2019 IPU Azure preview；公司称 2018 向 Microsoft 交付首芯片 | A（公告/创始回顾） | 云预览、共同研发和早期客户 | 持续至 2026 的 Azure 标准服务/大额订单 [S6][S18] |
| Argonne/ALCF | 2022 安装 Bow Pod 64，进入 AI Testbed | A | 科研测试设施部署 | 商业营收或机器人客户 [S20] |
| Citadel、Carmot Capital、Qwant | 公司 2020 称为 early access customers | B（公司自述） | 早期访问客户线索 | 采购金额、续约、当前客户 [S8] |
| Paperspace、G-Core Labs、Cirrascale | 按需 notebook/云服务/Graphcloud 合作 | A | 开发者与云入口 | Graphcore 自营云收入或当前服务可用性 [S19][S22][S23] |

### 合作网络三：产业合作

| 对方 | 关系 | 证据强度 | 对 Graphcore 的意义 |
|---|---|---:|---|
| Dell Technologies | DTC 投资、服务器和 IPU appliance 共同开发 | A | 将卡与 IPU 系统接入企业服务器/OEM 渠道 [S15] |
| Lenovo | Bow Pod 可由 Elite Partners 采用 Lenovo ThinkSystem SR630 V2 配置 | A | 证明系统需要经过认证的 host server，并非独立裸芯片可直接部署 [S28] |
| Cirrascale | IPU bare metal / Graphcloud POD 云合作 | A | 以合作云减轻客户自建集群门槛 [S19] |
| SoftBank | 母公司、资金与战略控制方 | A | 后续供给与路线的唯一关键谈判对象 [S1] |

### 合作网络四：技术、联合研发与科研渊源

| 对方 | 关系 | 证据强度 | 结论边界 |
|---|---|---:|---|
| Hugging Face | Hardware Partner Program、Optimum Graphcore 集成 | A | 有 Transformers 开发路径，不等于 Hugging Face 为硬件买方 [S21][S13] |
| Argonne/ALCF | Bow 系统进入研究测试平台 | A | 研究可用性和外部评测机会，不是收入证明 [S20] |
| University of Cambridge / Bristol | Knowles 为剑桥 EE 毕业；Toon 获布里斯托尔 DSc | B（人物页） | 人才教育背景，不可虚构为校企技术授权 [S16][S17] |
| 开源社区 | PopLibs/PopTorch/Examples/Optimum Graphcore 代码 | A/B | 有可检查的可编程资产和迁移样例；活跃维护程度需按仓库/SDK 版本核验 [S12][S13][S24] |

## 三、横向分析：今天它在什么竞争图谱中

### 1. 竞争场景判断

这是“场景 C”：Graphcore 并不面对一个空白品类。它面对的是 NVIDIA 的全栈 GPU 平台、AMD 的第二供给 GPU/ROCm 路线、Cerebras 的超大芯片/集群路线、Groq 的低时延推理路线，外加 Google TPU、云厂商自研芯片和各类中国/欧洲加速器。以下选 NVIDIA、AMD、Cerebras、Groq 四个代表对象；前两者是训练/推理主替代品，后两者分别代表“更激进的训练硬件”和“只把推理做到极致”的替代逻辑。

| 维度 | Graphcore IPU/Poplar | NVIDIA GPU/CUDA | AMD Instinct/ROCm | Cerebras WSE 系统 | Groq LPU 系统 |
|---|---|---|---|---|---|
| 基本计算哲学 | 图编译到大量 MIMD tile，强调片上存储和交换网络 | 通用 GPU/SIMT 与成熟 CUDA 生态 | GPU 与开放 ROCm 软件栈 | 超大单片/系统级矩阵计算 | 编译确定性、低时延推理 |
| 主要销售单位 | IPU、卡、IPU-M2000/POD 与 SDK | GPU、服务器/整机、云实例与 CUDA 软件 | GPU/服务器、云实例与 ROCm | 专用 wafer-scale 系统及服务 | 推理系统/云服务 |
| 对训练 | 原生目标，具图/稀疏/多芯片映射价值 | 事实标准，工具和模型最多 | 重要第二来源，兼容迁移在推进 | 聚焦大模型训练吞吐/大模型系统 | 不是主训练替代 |
| 对在线推理 | 可做，但需要专门编译/映射 | 最通用、服务生态最完整 | 可做，生态相对 NVIDIA 小 | 可做但系统形态特殊 | 强项，尤其低时延 token 生成 |
| 最大优势 | 非 GPU 编程模型与全栈可控性 | 软件、云、供应链、开发者和模型生态 | 第二来源与较开放软件定位 | 单芯片规模与大模型系统创新 | 低时延专门化 |
| 主要代价 | 迁移、版本、生态及当前产品生命周期不确定性 | 价格/供给/供应商集中 | 兼容度与生态深度仍需逐项目核验 | 极专用的系统与供应商绑定 | 训练能力不是其目标 |

表中的 NVIDIA、AMD、Cerebras、Groq 是生态位比较，不是统一性能排名。不同精度、模型、batch、序列长度、网络、软件版本以及是训练还是 decode，都会颠倒单项基准的结论。

### 2. 对手一：NVIDIA——Graphcore 最难复制的不是 Tensor Core，而是默认选择权

Graphcore 创立时，GPU 还没有完全吞没深度学习；到大模型时代，CUDA 已经变成框架、算子库、调试器、容器、云、培训资料和人才市场共同形成的默认语言。NVIDIA 官方 CUDA 文档把 CUDA Toolkit、库、工具和开发环境作为整体交付，而不是一颗 GPU 的驱动附件。[S29] 因此用户选择 NVIDIA 往往不是因为每个模型都在某张卡上绝对最快，而是因为模型作者、开源代码、云镜像、推理框架和招聘市场大概率已做好了。

Graphcore 的 Poplar 平台功能上很接近“CUDA-like”的完整平台：有运行时、图编译器、设备编程/API、PopLibs、PyTorch/TensorFlow/ONNX 后端、POD 规模工具和 PopVision 分析器。[S10][S11][S12] 但两者的开发体验并不等价。PopTorch/Hugging Face 集成能减少入口摩擦，却仍要求选择 IPUConfig、配置 pipeline/模型并行和适配 Poplar 版本；CUDA 的关键优势是这些工作已沉淀在大量第三方项目的默认路径中。[S13][S24]

对机器人公司，这意味着 GPU 的真正价值是“保留选择权”：同一训练配方可接入视觉编码器、语言模型、仿真、数据清洗、分布式训练、推理服务和具身模型社区。IPU 只有在某个明确、反复运行、可复现且经 port 后收益显著的子负载上，才应挑战这一默认栈。

### 3. 对手二：AMD——比 IPU 更接近 GPU 的第二来源

AMD Instinct/ROCm 的竞争意义不是宣称它在所有基准超过 NVIDIA，而在于它保持了 GPU 程序模型与主流框架方向的连续性。ROCm 官方定位为开源软件平台，覆盖驱动、运行时、编译器、库与框架支持。[S30] 对一支已经用 PyTorch/CUDA 训练机器人视觉—语言—动作模型的团队，ROCm 迁移仍有工程成本，却通常比迁移到不同图执行范式更容易复用既有模型、数据和工程经验。

Graphcore 因而不应把 AMD 当作“另一家普通芯片对手”。如果买方目标是供应安全和议价权，AMD 是更自然的 GPU 第二源；如果目标是探索不规则图、片上存储、细粒度 MIMD 或编译器创新，Graphcore 才有不可替代的研究价值。把这两个目标混在一个采购评分表里，通常会让 IPU 看起来既不够兼容、又不够便宜，丢掉其真正长处。

### 4. 对手三：Cerebras——同样反 GPU，但把赌注押在“更大的一块硅”

Cerebras 的 WSE 路线与 Graphcore 同为非 GPU，但工程押注相反：Graphcore 将大量 tile 做成可组合芯片/POD，并把图映射与互联视为产品的一部分；Cerebras 则把 wafer-scale 芯片和配套系统作为核心单位。其当前官网仍将 Wafer-Scale Engine 定位为最大型芯片、面向高速 AI 计算；这支持“超大单芯片/系统是其产品抽象”的结论，但不应将其营销倍率与 Graphcore 的旧代基准直接比较。[S31]

对用户而言，Cerebras 的吸引力是为大模型训练减小传统多 GPU 的分片与通信痛点；代价是更高的专用系统依赖、不同的软件/服务接口和供应商集中。Graphcore 的价值则在于“图级别细粒度可编程的多芯片处理器”，并可让不同 POD 尺度服务多个模型类别。两家公司都需要客户跨出 CUDA 舒适区，但需要客户改变的方向完全不同。

对人形机器人而言，若未来目标是一个极大、稳定、以预训练为中心的基座模型，Cerebras 式系统可以成为评测对象；若目标是大量视觉、图、控制、仿真与不同模型的组合实验，Graphcore 的抽象更有研究贴合度。但截至本报告截止日，没有可公开验证资料证明 Graphcore 在 VLA 全栈训练上取得了足以替代 GPU 的生产优势。不能把“有多模态示例”推演成“适合公司主训练”。[S24]

### 5. 对手四：Groq——把边界收窄到推理，反而换来清晰产品定位

Groq LPU 的重要性在于提醒：非 GPU 加速器不一定要同时赢训练和推理。Groq 的官方资料把 LPU 定位在低时延、确定性的大模型推理服务，而不是通用训练平台。[S32] 这使其销售叙事、性能指标和用户路径更集中：用户买的是 token 延迟、吞吐和模型服务，而不是一套需要从训练图一路编译到底层 tile 的全栈研究环境。

Graphcore 历史上同时追求训练与推理，这带来平台广度，也要求维护更多框架、模型、性能和集群组合。对机器人公司，Groq 类产品可被放进“云端语言交互/高并发控制辅助”的推理供应商池；Graphcore 更适合放进“离线训练、研究和编译器评估”的小池。两者不应在同一张“加速卡 TOPS”表里做错误竞价。

### 6. 用户/开发者视角：可观察信号比想象中的口碑更可靠

本轮没有找到足以代表广泛企业用户的、可归因且可复现的满意度调查；故不虚构“开发者普遍喜欢/讨厌 IPU”的口碑。可验证的开发者信号如下：

| 信号 | 对开发者的含义 | 证据 |
|---|---|---|
| PopTorch 为 PyTorch 与 PyTorch Geometric 提供训练、评估、推理接口 | 主流框架用户可从已有模型进入，而非完全写裸 C++ | [S12] |
| Optimum Graphcore 提供 `IPUTrainer`/`IPUConfig` | Hugging Face 生态有正式接点，但配置对象表明不是真正零修改迁移 | [S13] |
| PopLibs 对 custom operation 开放源代码 | 深度用户可查看/扩展低层库，利于算子研发 | [S11] |
| Examples 有多领域模型目录 | 证明工作负载广度和教育材料，而非当前客户数 | [S24] |
| README 要求特定 Poplar、Ubuntu、Python 版本并显式启用二进制环境 | 版本锁定、运行环境与工具链维护是实际使用成本 | [S12][S24] |
| 现网站导航把文档归入 “Legacy Products” 入口 | 需要在采购前确认 SDK、驱动、备件与技术支持的当前 SLA；不能由导航文字单独断言停服 | [S27] |

这张表的结论并不悲观：Graphcore 已经超过“只有 compiler slideware”的阶段。真正的弱点是，在最需要长期维护的地方——新模型版本、算子、集群运维、云可得性、人才供给——它必须同拥有压倒性规模的 GPU 平台竞争。对一个长期机器人产品线，这是比单代芯片能效更重的风险。

## 四、横纵交汇洞察：历史怎样塑造了今天的位置

### 1. 成功的根源，也是商业约束的根源

Graphcore 最独特的资产来自早期“不把 AI 当 GPU 的一个应用”的坚持。2012—2016 的图、片上内存和细粒度并行判断，沉淀成 GC 系列芯片、IPU-Link/POD、Poplar/PopLibs 与 PopVision；这是它能在 Microsoft、Argonne、Hugging Face 等环境里被真正试用的原因。[S6][S9][S20][S21] 不是单纯募集资金买来的。

但同一选择把公司锁入了高固定成本：每个新框架版本、模型算子、精度格式、分布式策略和云服务都要被重新映射和验证。NVIDIA 借数以百万计开发者、云和开源社区摊薄这种成本；Graphcore 需要用自身团队和伙伴覆盖。于是，Graphcore 在芯片已被验证后仍然需要连续融资、OEM/云伙伴和科研生态，直到 SoftBank 收购成为其资本结构的终点。

这里的历史教训很适合机器人自研芯片讨论：**架构新颖并不能自动带来平台价值；平台价值来自多年持续支付的“兼容、工具、文档、模型和客户成功”成本。** IPU 的路径证明构建整套软件栈可行，也证明只在某些模型基准领先不足以让外部世界迁移。

### 2. Graphcore 与主要对手的“时间线差”

NVIDIA 是从通用 GPU、CUDA、多代硬件和云伙伴一路累积而来，先形成开发者默认语言，再把大模型吃进去；AMD 以相近程序模型争取第二源位置；Cerebras 选择极大硅片来换取模型系统简化；Groq 把边界收缩为推理以获取明确价值。Graphcore 则在最早阶段选择同时构建新处理器、新编程模型、新系统和新市场。

这条路让它比仅有 ASIC 的公司更完整，也比 CUDA 生态更难卖。2018—2020 的资本与 Azure/Dell 合作曾足以把这种风险掩盖，因为当时模型形态多元、AI 芯片估值高、云还愿意测试新加速器。生成式 AI 之后，产业的重心转为尽快运行不断变化的 Transformer、MoE、长上下文、多模态和推理服务；软件维护速度和云可获得性反而更决定采购。SoftBank 收购可以为 Graphcore 重新提供资本耐心，但不能自动补上外部生态。

### 3. 对人形机器人的具体含义

人形机器人公司的计算任务不是一类：离线视觉/多模态预训练、世界模型/仿真、VLA 后训练、数据清洗、强化学习、边缘端部署、车间/云端推理，对精度、batch、实时性和生命周期的要求都不同。Graphcore 最可能有价值的不是端侧实时控制——其历史公开交付集中在数据中心 IPU/POD——也不是在尚未验证的情况下替代通用 GPU 大集群。[S19][S20][S24]

它更值得拿来做两个研究问题。其一，图网络、世界模型中的稀疏/不规则结构、仿真或科学机器学习中是否存在“计算—通信结构稳定且可图编译”的子负载；其二，机器人自研芯片团队能否从 Poplar 的图划分、片上 SRAM、程序化通信、profile/visualisation 工具中获得方法论，而不是复制 IPU 的完整硅实现。前一问题必须跑基准，后一问题可通过代码、文档和人才访谈先做。

### 4. 三个未来剧本

| 剧本 | 逻辑链 | 对机器人公司的动作 |
|---|---|---|
| **最可能：集团内工程资产化** | SoftBank 继续投入人才/研发，Graphcore 围绕集团 AI 计算战略产出芯片、系统或关键 IP；外部独立销售和旧 SDK 的公开生态不再是唯一 KPI | 不押注其公开产品路线；建立 SoftBank/Graphcore 高层技术窗口，获取路线、支持期限、IP 边界后才谈联合 PoC |
| **最危险：旧生态收缩、路线不透明** | 新组织重排优先级，公开 SDK/云/备件支持变慢，历史客户和开发者难以跟随最新框架，外部采购因供应/支持不确定而失去意义 | 禁止将 IPU 设为生产主训练或安全关键推理的单点；任何 PoC 均要求源码/模型/数据可退回 CUDA/ROCm，写入退出条款 |
| **最乐观：SoftBank 将 IPU 团队融入大规模 AI 基础设施并推出新产品** | 资金、云/系统级需求和 Graphcore 的图编译/芯片能力重新结合，形成有明确客户、现代框架和长期支持的计算平台 | 争取联合研究与早期评测权；若能获得可验证 SKU、支持 SLA 和实测优势，可将其作为特定训练子负载的第二/第三来源 |

最乐观剧本需要证据，不应凭 2025 年招聘公告提前入账。最低证据应包括：新一代产品公开规格和实测、支持的 PyTorch/JAX/主流推理框架版本、可订购 SKU 与交期、维护 SLA、至少一个与机器人相近的公开或可审计案例，以及与 SoftBank/Arm/云业务的实际交付关系。[S26]

## 五、面向人形机器人公司的投资、并购、采购/合作与自研建议

### 1. 决策矩阵

| 选项 | 建议 | 理由 | 触发条件 | 关键风险/保护措施 |
|---|---|---|---|---|
| 财务投资 | **不建议作为常规一级市场投资** | SoftBank 已全资收购，独立股权进入窗口不存在 [S1] | 仅当 SoftBank 正式剥离某可交易实体/IP 载体 | 需先核验股权、优先权、IP/员工归属；不接受“战略合作”替代交易权利 |
| 整体并购 | **当前不建议主动追求** | 标的已是集团资产；并购动机、价格和剥离可行性未知，且整合会接手硬件+软件长期维护负担 | SoftBank 明确出售非核心 IP/业务单元，且可得到核心编译器、专利、关键工程师和长期代工/工具许可 | 把 IP 归属、开源许可、第三方 EDA/CPU/互联许可、出口与供应连续性设为先决条件 |
| 人才/IP 定向交易 | **可探索，但须由 SoftBank 授权** | Poplar/编译器、系统和芯片团队经验对自研有高价值，优于为现有 POD 付高迁移成本 | 可获明确许可、团队稳定性、干净 IP 链与非排他研究权 | 创始人治理变动已出现；禁止把历史个人履历视为团队仍可获得 [S2][S18] |
| 采购 | **仅用于受控 PoC，不进入生产主训练** | 可检验图/稀疏/通信类子负载；当前外部 SKU、SLA 与软件更新状态未被本研究充分验证 | 三个模型基准均优于 GPU 基线，且有供货、维护、迁移和回退条款 | 任何产物须可在 CUDA/ROCm 重跑；不将唯一数据/模型格式锁入 Poplar |
| 联合研发 | **有条件推荐** | Graphcore 的差异化更可能存在于编译器、片上存储/通信映射和性能可视化，而非通用采购 | SoftBank/Graphcore 书面确认技术支持、数据安全、结果/IP 归属 | 先用脱敏模型/合成数据；明确改进归属和发布审批 |
| 自研芯片 | **不复制 IPU；吸收方法、分阶段验证** | IPU 全栈历程表明硬件与软件必须共同投入；机器人公司未必承担得起新 ISA/编译器/云生态 | 已定义稳定目标负载、PPA、软件团队、代工/封装/内存与 5 年维护预算 | 把图编译/片上 SRAM/通信做可量化研究项，而非把“IPU”当产品需求 |

### 2. 建议的 90 天验证包

1. **工作负载选择**：从机器人训练中抽取一个视觉编码器、一个时序/Transformer 子模型、一个图或仿真类负载；记录 batch、序列长度、精度、通信、数据输入和训练收敛标准。不要一开始拿整个 VLA 端到端迁移。
2. **双基线**：在当前 NVIDIA 基线和可行时 AMD ROCm 基线上固定软件版本，测 time-to-convergence、吞吐、p99 编译/启动时间、单位有效训练成本、故障恢复时间与工程人天；IPU 结果必须能复跑。[S14]
3. **软件/运营尽调**：要求提供在 2026-08-11 后有效的 SDK release、支持矩阵、Docker/OS、PyTorch/JAX/ONNX 支持、POD 管理、备件与 RMA、云服务可用区域、代码 escrow（如适用）及 SLA。历史 3.1/3.4 文档不能代替当前承诺。[S12][S24]
4. **权利尽调**：向 SoftBank 确认 Graphcore、Arm、SoftBank 其他主体之间的 IP、人员、采购和销售权边界；核验 Nigel Toon、Simon Knowles 离任后关键架构/编译器负责人和留任激励。[S1][S2][S18]
5. **退出门槛**：若没有 20% 以上的端到端可验证收益，或不能提供至少 24 个月的可执行支持/供货承诺，停止扩大 PoC；将转换后的模型、训练脚本和数据管道保留为可回到 GPU 的格式。

## 六、证据/来源审计表

| 编号 | 主要承重事实 | 来源级别 | 来源类型 | 访问日期 |
|---|---|---:|---|---|
| S1 | 2024 收购、全资子公司 | A | Graphcore 官方公告 | 2026-08-11 |
| S2 | 法定主体、申报、董事任免 | A | UK Companies House | 2026-08-11 |
| S3 | 2016 Series A/出隐身 | A | Graphcore 官方公告 | 2026-08-11 |
| S4 | 2017 Series B | A | Graphcore 官方公告 | 2026-08-11 |
| S5 | 2018 $200m 轮、估值、投资人 | A | Graphcore 官方公告 | 2026-08-11 |
| S6 | Microsoft Azure preview、BERT 示例 | A | Graphcore 官方公告 | 2026-08-11 |
| S7 | 2020 Series E、$222m、$2.77bn | A | Graphcore 官方公告 | 2026-08-11 |
| S8 | 2020 $150m 追加、早期访问客户 | A | Graphcore 官方公告 | 2026-08-11 |
| S9 | GC200 1,472 cores、900 MiB | B | 官方对 Hot Chips 演讲的转述 | 2026-08-11 |
| S10 | Poplar 全栈、框架/ONNX 接口 | A | Graphcore 官方开发者公告 | 2026-08-11 |
| S11 | PopLibs/PopART/TF IPU 开源 | A | Graphcore 官方公告 | 2026-08-11 |
| S12 | PopTorch/PopLibs README、SDK 约束 | A | Graphcore GitHub 源码/文档 | 2026-08-11 |
| S13 | Optimum Graphcore 开发接口 | B | Hugging Face GitHub | 2026-08-11 |
| S14 | IPU 独立微基准 | B | arXiv 学术论文 | 2026-08-11 |
| S15 | Dell appliance 与订单簿表述 | A | Graphcore 官方公告 | 2026-08-11 |
| S16/S17 | 两位创始人履历 | B | Graphcore 官方人物页 | 2026-08-11 |
| S18 | 2012 起源、2018 首客户、2026 组织与 Toon 离任 | B | Nigel Toon 官方署名文章 | 2026-08-11 |
| S19—S28 | POD、Argonne、伙伴、招聘、治理、软件入口 | A/B | 官方公告/页面 | 2026-08-11 |
| S29—S32 | 代表竞品的软件/架构定位 | A | 竞品官方技术资料 | 2026-08-11 |

## 七、冲突与未确认事项

| 问题 | 支持证据 | 相反/限制证据 | 当前处理与下一步 |
|---|---|---|---|
| 成立日期是 2016-05 还是 2016-07？ | Companies House 注册日 2016-05-18 [S2] | Toon 回顾称与 Knowles 于 2016-07 共同创办 [S18] | 视为法律注册与运营创办两个口径；交易尽调以股权/章程为准 |
| Series A 是 $30m 还是 $32m？ | 2016 首次公告写 $30m [S3] | 2017 Dell 文章回顾为 $32m [S15] | 融资表保留首次公告 $30m，并标注冲突；需查看最终 closing 文件 |
| 累计融资超 $600m 还是超 $710m？ | 2026 回顾 “over $600m” [S18] | 2020 Series E 公告 “over $710m” [S7] | 前者为回顾性概数，后者为当日细口径；不做差额推断 |
| 2026 谁在实际领导 Graphcore？ | 团队页列 Toon Executive Chairman，个人页仍列 Toon CEO/Chairman、Knowles CTO [S16][S17][S27] | Toon 离任文与 Companies House 记录 Toon/Knowles 的董事终止 [S18][S2] | 官方网页显然可能滞后；向 SoftBank 索取董事会、管理团队和授权签字人清单 |
| SoftBank 的收购价和后续产品承诺 | 全资收购已确认 [S1] | 公告未披露价格、产品路线、订单或与 Arm 的具体关系 | 不估算交易价格；要求卖方提供 SPA 摘要/可披露产品路线 |
| 当前 SKU、SDK、云服务是否仍面向外部供应 | 历史 SDK、GitHub、伙伴云均有证据 [S12][S19][S22][S23] | 本研究未取得 2026 外部报价、支持 SLA 或新版 SDK 生命周期；站点有 Legacy Products 入口 [S27] | 不能把历史可用性当当前可采购性；列为采购 P0 问题 |
| IPU 是否性能普遍领先 GPU | 公司曾发布对 A100 的性能声称 [S33] | 独立研究强调性能取决于架构/应用，且比较对象/版本有限 [S14][S25] | 不接受厂商泛化排名；必须按本公司模型复测 |
| 对 VLA/世界模型的适配性 | Examples 含多模态、视觉、GNN/仿真类目录 [S24] | 无公开、可审计的人形机器人 VLA 生产案例 | 仅列研究假设，不能列为采购优势 |

## 八、产业链分类复核

### 主二级分类：**1.4 其他 AI 芯片架构（IPU）**

**结论：主分类应为 1.4，且具体标注为 IPU。** Graphcore 的价值承载物是自主 IPU 芯片、PCIe/系统和 IPU-POD；其硬件的公开特征是大量并行核心、片上存储、图执行和专用互连/系统组织，而不是 GPGPU、TPU、通用 NPU 或图形 GPU。[S9][S15][S19] 这直接符合分类规则中“FPGA、LPU、IPU、DPU 等其他 AI 芯片架构”这一稳定差异。主类不应被其云合作、POD 系统或框架接口稀释为“集成商”或“训练框架公司”：客户购买核心仍是 IPU 计算能力及其配套平台。

### 正式次分类：**2.1 加速计算平台（CUDA-like）**

**结论：列为正式次分类，平台完整度评分 95/100；评分只说明栈完整度，不说明其性能或生态规模优于 CUDA。**

| 准入条件/评分项 | 分数 | 已核验证据 | 判定 |
|---|---:|---|---|
| 平台化定位（10） | 10 | Poplar 是跨 IPU 产品代际的命名 SDK/图执行平台 [S10][S12] | 满足 |
| 软件栈完整度（40） | 40 | 运行时、Graph Compiler、Poplar/PopART、PopLibs、PyTorch/TF/ONNX 后端、分析工具均有公开文档/代码 [S10][S11][S12] | 覆盖七项且含三项必选 |
| 可编程与可扩展性（20） | 20 | PopLibs 可读/可扩展以实现 custom operation；有 Poplar API [S11][S12] | 满足 |
| 工作负载广度（15） | 15 | 训练/推理、NLP、视觉、多模态、GNN、仿真、稀疏等示例 [S24] | 满足 |
| 开发者产品化（15） | 10 | SDK/文档、Docker/下载、GitHub、Examples、Hugging Face/云入口均有；但当前公开支持生命周期待核验 [S12][S13][S23][S24] | 功能证据充分，持续支持扣 5 分 |
| 多代演进/通信/真实部署（10） | 10 | C2/GC2、GC200、Bow、POD、Argonne/Microsoft/云合作证据 [S6][S9][S19][S20] | 满足 |
| **合计** | **95** |  | **超过 70 分门槛** |

“当前支持生命周期待核验”不推翻 2.1 分类，因为分类规则评价平台功能完整度和可验证交付，不以性能、稳定性或兼容率作为平台存在前提；但它会直接降低采购与投资建议的优先级。

### 不列为正式次分类的相邻类别

- **3.3 算力中心集成：不列。** IPU-POD 是系统级产品，但当前可见价值核心仍为自有加速器与软件平台；没有证据表明其主营是面向多厂商交付算力中心集成。
- **5.1 训练框架、5.2 推理框架：不列。** Poplar/PopART 是服务 IPU 的平台组件，不是硬件中立、以框架收入为核心的独立训练/推理框架。
- **4.x 异构调度：不列。** 没有足够证据证明它运营跨厂商 XPU 的统一调度产品。
- **6.4 多模态、6.5 VLA、6.6 WAM：不列。** 这些是模型负载类型，不应因 Examples 出现多模态条目就把硬件公司归入模型公司；更无公开 VLA/WAM 商业化证据。

## 信息来源

- [S1 Graphcore，2024-07-11，Graphcore joins SoftBank Group to build next generation of AI compute](https://www.graphcore.ai/posts/graphcore-joins-softbank-group-to-build-next-generation-of-ai-compute)
- [S2 UK Companies House，GRAPHCORE LIMITED（10185006）公司主页与申报历史](https://find-and-update.company-information.service.gov.uk/company/10185006)；[申报历史](https://find-and-update.company-information.service.gov.uk/company/10185006/filing-history)
- [S3 Graphcore，2016-10-31，Graphcore secures $30m in funding to accelerate AI](https://www.graphcore.ai/posts/graphcore-secures-30m-in-funding-to-accelerate-ai)
- [S4 Graphcore，2017-07-20，Big names in machine intelligence join Graphcore’s new $30 million funding round](https://www.graphcore.ai/posts/big-names-in-machine-intelligence-join-graphcores-new-30-million-funding-round)
- [S5 Graphcore，2018-12-18，Graphcore adds $200m from BMW, Microsoft and leading financial investors](https://www.graphcore.ai/posts/graphcore-adds-200m-from-bmw-microsoft-leading-financial-investors-to-drive-growth)
- [S6 Graphcore，2019-11-13，Microsoft and Graphcore collaborate to accelerate Artificial Intelligence](https://www.graphcore.ai/posts/microsoft-and-graphcore-collaborate-to-accelerate-artificial-intelligence)
- [S7 Graphcore，2020-12-29，Graphcore raises $222 million in Series E Funding Round](https://www.graphcore.ai/posts/graphcore-raises-222-million-in-series-e-funding-round)
- [S8 Graphcore，2020-02-25，Graphcore secures additional $150 million in new capital](https://www.graphcore.ai/posts/graphcore-secures-additional-150-million-in-new-capital)
- [S9 Graphcore，2021-08-25，Designing the Colossus Mk2 IPU: Simon Knowles at Hot Chips 2021](https://www.graphcore.ai/posts/designing-the-colossus-mk2-ipu-simon-knowles-at-hot-chips-2021)
- [S10 Graphcore，2020-03-19，Graphcore makes Poplar SDK Docs publicly available](https://www.graphcore.ai/posts/graphcore-makes-poplar-sdk-docs-publicly-available)
- [S11 Graphcore，2020-07-07，Graphcore Open Sources Poplar Graph Libraries (PopLibs)](https://www.graphcore.ai/posts/graphcore-open-sources-poplar-graph-libraries-poplibs)
- [S12 Graphcore GitHub，PopTorch SDK 3.4 README](https://github.com/graphcore/poptorch/tree/sdk-release-3.4)；[PopLibs SDK 3.4 README](https://github.com/graphcore/poplibs/tree/sdk-release-3.4)
- [S13 Hugging Face GitHub，Optimum Graphcore](https://github.com/huggingface/optimum-graphcore)
- [S14 Jia et al.，2019，Dissecting the Graphcore IPU Architecture via Microbenchmarking](https://arxiv.org/abs/1912.03413)
- [S15 Graphcore，2018-11-16，First reveal of Dell-Graphcore IPU platform](https://www.graphcore.ai/posts/first-reveal-of-dell-graphcore-ipu-platform)
- [S16 Graphcore，Nigel Toon profile](https://www.graphcore.ai/nigel-toon)
- [S17 Graphcore，Simon Knowles profile](https://www.graphcore.ai/simon-knowles)
- [S18 Graphcore，2026-07-31，Graphcore Co-Founder and Executive Chair, Nigel Toon, steps down](https://www.graphcore.ai/posts/graphcore-co-founder-and-executive-chair-nigel-toon-steps-down)
- [S19 Graphcore，2021-01-26，Introducing Graphcloud with Cirrascale](https://www.graphcore.ai/posts/introducing-graphcloud-graphcores-mk2-ipu-pod-ai-cloud-service-with-cirrascale)
- [S20 Graphcore，2022-11-09，Argonne National Laboratory adds Graphcore Bow IPU AI system](https://www.graphcore.ai/posts/argonne-national-laboratory-adds-graphcore-bow-ipu-ai-system)
- [S21 Graphcore，2021-09-14，Hugging Face and Graphcore partner for IPU-optimized Transformers](https://www.graphcore.ai/posts/hugging-face-and-graphcore-partner-for-ipu-optimized-transformers)
- [S22 Graphcore，2022-02-02，G-Core Labs launches European AI cloud powered by Graphcore IPU](https://www.graphcore.ai/posts/g-core-labs-launches-european-ai-cloud-powered-by-graphcore-ipu)
- [S23 Graphcore，2023-01-12，Paperspace and Graphcore launch pay-as-you-grow Gradient Notebooks](https://www.graphcore.ai/posts/paperspace-and-graphcore-launch-pay-as-you-grow-gradient-notebooks)
- [S24 Graphcore GitHub，Application Examples](https://github.com/graphcore/examples)
- [S25 Arcelin，2021，Comparison of Graphcore IPUs and Nvidia GPUs for cosmology applications](https://arxiv.org/abs/2106.02465)
- [S26 Graphcore，2025-10-09，Graphcore to invest £1bn in India, creating 500 semiconductor jobs](https://www.graphcore.ai/posts/graphcore-to-invest-1bn-in-india-creating-500-semiconductor-jobs)
- [S27 Graphcore，Our Team / 当前网站导航](https://www.graphcore.ai/our-team)
- [S28 Graphcore，2022-05-13，Lenovo servers now available for Graphcore IPU systems](https://www.graphcore.ai/posts/lenovo-servers-now-available-for-graphcore-ipu-systems)
- [S29 NVIDIA，CUDA Toolkit Documentation](https://docs.nvidia.com/cuda/)
- [S30 AMD，ROCm Documentation](https://rocm.docs.amd.com/)
- [S31 Cerebras，Wafer-Scale Engine 产品定位](https://www.cerebras.ai/)
- [S32 Groq，LPU Inference Engine](https://groq.com/)
- [S33 Graphcore，2020-12-09，Graphcore sets new AI Performance Standards with MK2 IPU Systems](https://www.graphcore.ai/posts/graphcore-sets-new-ai-performance-standards-with-mk2-ipu-systems)

## 方法论说明

本报告采用横纵分析法：纵向追踪 Graphcore 从创始假设、融资、芯片/软件/系统演进到 SoftBank 收购后的组织变化；横向在 2026-08-11 的计算平台格局中比较其与 GPU、wafer-scale 训练和专用推理路线的差异。判断优先使用一手公告、法定档案、可检查源码和独立论文；无法由公开资料确认的客户、订单、收购价格、当前支持与产品路线均明确保留为待核验事项。
