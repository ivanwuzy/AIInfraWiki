# Tenstorrent 横纵分析报告

> Source: 本地文件 `横纵研究报告/Tenstorrent_横纵分析报告.md`
> Collected: 2026-08-11
> Published: Unknown

> **研究对象**：Tenstorrent Holdings, Inc.（下称 Tenstorrent；其官网条款中另出现运营主体 Tenstorrent USA, Inc.，本报告不将二者的合同或收入自动互相归属）  
> **研究截止日**：2026-08-11  
> **研究目的**：为人形机器人公司的训练、推理、自研芯片与潜在投资/并购布局提供判断，而非产品推荐或财务审计。  
> **证据口径**：除另注外均为公司公告、产品文档或开源仓库的一手资料；“发布/可订购”“合作/选择 IP”“已部署”“客户订单/收入”是四个不同层级。金额保持原公告的“over/约”等限定。[S1]–[S16]

## 结论先行

**一句话定义**：Tenstorrent 是把自研 Tensix AI 加速器、RISC-V CPU/IP、chiplet 设计能力和开放软件栈绑定销售/许可的非 GPU 计算公司；它的价值不在于已经证明可替代所有 CUDA 集群，而在于提供了一条可被实物开发卡、IP 合作和底层可编程软件验证的“非 CUDA、可定制”路线。[S3][S6][S7][S9]

| 决策 | 阶段性建议 | 依据与前置条件 |
|---|---|---|
| 采购/合作 | **仅限付费 PoC，优先云端或开发机** | 可购买/预购的 Wormhole、Blackhole 卡及工作站、公开的软件与模型示例降低了进入门槛；但没有足够的独立第三方证据证明其对机器人训练或大规模生产推理具有普遍 TCO 优势。[S5][S6][S14] |
| 战略投资 | **观察池，满足技术与商业尽调后再议** | Series D 之前估值为 20 亿美元、融资超过 6.93 亿美元，资本与产品开发能力显著；但公司口径的约 1.5 亿美元 closed deals 不等于已确认收入，投资方也不等于客户。[S4] |
| 并购 | **不建议整体收购；可研究 IP/团队/资产的选择权** | 其核心价值横跨加速器、RISC-V、D2D/SerDes 和软件，整合边界大、资本需求高；Blue Cheetah 收购进一步扩大了 D2D/DDR/SerDes 能力，却未证明可独立剥离或可立即用于机器人 SoC。[S11] |
| 自研 | **借鉴、联合设计或获取许可，不押注替代主训练栈** | RISC-V/chiplet 合作可为机器人自研边缘 SoC 和专用协处理器提供参照；先验证 IP 许可范围、流片责任、软件可移植性、功能安全与供应保障。[S9][S10][S11] |

结论的反面同样重要：Tenstorrent 的软件已超过“仅把固定模型转成二进制”的工具链——公开仓库显示 TT-NN、TT-Metalium、框架前端、设备管理和调试工具；但截至截止日，公开资料尚不足以证明其覆盖主流框架上的**训练或后训练**，也缺乏可比的外部客户规模、迁移成本和生产 SLA 证据。因此本报告**不授予 2.1 加速计算平台（CUDA-like）正式次分类**，而不是否认它具备成长潜力。[S13][S14][S15]

## 研究边界与商业承载物

| 层 | 可验证交付物 | 不能据此推出的结论 |
|---|---|---|
| AI 加速器/系统 | Grayskull、Wormhole、Blackhole 开发卡、QuietBox/LoudBox，以及 Galaxy 系统公告。[S1][S5][S6][S12] | 不能将开发机下单、厂商性能或生态名单写成规模量产、独立测试优势或收入。 |
| 软件 | TT-NN、TT-Metalium、TT-Forge-ONNX、TT-XLA、工具与文档；部分代码采用 Apache-2.0。[S6][S13][S14][S15] | 开源不等于 CUDA 兼容、训练成熟、跨厂商中立或无迁移成本。 |
| IP/联合设计 | AI/RISC-V IP、LSTC 的 2nm edge accelerator co-design、LG/MosChip 合作。[S3][S9][S10] | 投资、联合研发或“potentially/eventually”产品构想，不等于对方已采购量产芯片。 |
| 云/系统生态 | 公司公告列出 Galaxy 定价、合作/部署伙伴与更大系统；2021 年 DevCloud 是计划。[S1][S12] | 合作方名称、部署表述和产品起价不等于实际订单金额、收入或可用产能。 |

## 一、纵向分析：从“可编程芯片”到多条商业化路径

### 1. 起点与第一次锁定：先把可编程性放进芯片公司

2021 年 5 月，Tenstorrent 把自身描述为面向“software 2.0”计算需求的下一代计算公司。当时 CEO 为 Ljubisa Bajic，CTO 为 Jim Keller；公司宣布 Grayskull 处理器计划于 2021 年下半年上市，并计划推出 DevCloud。这里的关键词不是单纯“算力更高”，而是为开发者提供可编程、可负担的 AI 硬件。[S1]

这一路线早早形成两项承诺。其一，硬件不是传统 GPGPU：公司以 Tensix 加速器和片上网络为中心，而不是以图形/通用 GPU 生态为中心。其二，软件不是售后附件：未来必须有编译、设备编程、框架入口和调试工具，否则一颗非 GPU 芯片难以成为开发者产品。好处是其后可以同时进入卡、工作站、系统与 IP；代价是必须同时维护硅、板卡、固件、编译器、算子库和开发者关系，资本与执行链显著长于只卖 IP 的公司。

### 2. 2021–2022：资本支持“开发者硬件”的第一轮兑现

2021 年 5 月公司宣布融资 **over 2 亿美元**、估值 **10 亿美元**，由 Fidelity Management and Research Company 领投，Eclipse Ventures、Epic CG、Moore Capital 等参与。[S1] 该融资验证的是投资者愿意支持开发者导向的 AI 计算路线；它不验证 Grayskull 的实际出货、DevCloud 的实际可用性或客户采用率。尤其是公告中的 DevCloud 为将来时，不能事后把它当作已经形成的云业务。

从这时起，Tenstorrent 的商业逻辑并非“做一张竞品 GPU 卡”。卡与开发系统承担开发者获客和软件反馈，系统可承接更大推理/计算场景，RISC-V/AI IP 则为希望定制硅的客户提供另一条收入可能性。这种多通路增加了可选性，也让外部很难在没有审计披露的情况下判断哪一项才是当前收入与毛利的主要承载物。

### 3. 2023：管理层表达的变化与汽车/半导体资本的信号

2023 年 8 月的官方公告中，Jim Keller 已以 CEO 身份发言。公司完成 **1 亿美元**战略 up-round，由 Hyundai Motor Group 与 Samsung Catalyst Fund 共同领投，Fidelity Ventures、Eclipse、Epiq、Maverick 等参与；资金用途是 AI chiplet 和 ML 软件路线。公司同时明确称自己销售 AI processors，并向希望拥有和定制芯片的客户许可 AI 与 RISC-V IP。[S3]

这次融资有两层含义。第一，现代汽车与 Samsung Catalyst 的入股为汽车、半导体和供应链协同提供了线索，不能写为现代汽车已购买 Tenstorrent 芯片或已共同量产。第二，把 chiplet 与 ML 软件写入融资用途，说明公司希望从单芯片可编程性扩展到可组合计算和软件生态；但它也暴露了一个现实问题：产品路线越宽，越需要明确每一条线的真实客户、授权边界和交付责任。

### 4. 2024：Wormhole 变成可接触的开发产品，RISC-V/IP 变成合作入口

2024 年 7 月，Tenstorrent 发布基于 Wormhole 的 n150/n300 开发套件与 TT-LoudBox、TT-QuietBox 工作站；其中两款工作站均配 8 个处理器，并由开源 TT-Buda 与 TT-Metallium 支持。[S5] 这比路线图更强：至少证明公司提供了可订购/预购的多芯片开发形态。但它仍是开发者/工作站产品，不应外推为已验证的高密度数据中心交付或训练集群。

同年 2 月，LSTC 选择其 RISC-V 与 chiplet IP，用于面向边缘的 2nm AI accelerator，Tenstorrent 是 co-design 方，Rapidus 被置于制造/先进封装目标中，CPU core 指向 Ascalon。[S9] 这是目前较清晰的 IP/协同设计证据，也是机器人公司最应关注的部分：它说明 Tenstorrent 不只销售板卡，能够进入客户定制芯片的早期架构阶段。不过“选用 IP/co-design”并不披露流片、量产、授权费率、NRE、良率或客户收入，因而不能把项目列为已兑现的 SoC 业务。

12 月，公司宣布 Series D 融资 **over 6.93 亿美元**，融资前估值 **20 亿美元**，由 Samsung Securities 和 AFW Partners 领投；投资者还包括 XTX Markets、LG Technology Ventures、Hyundai、Fidelity、Bezos Expeditions、HOOPP 等。公告称公司有约 **1.5 亿美元 closed deals**，并计划扩大开源 AI 软件、全球开发/设计中心、系统与云。[S4] 资本规模显著提高了其做多代芯片、软件和系统的能力，但 closed deals 未说明会计期间、履约、毛利或回款，不能替代收入尽调。

### 5. 2025：Blackhole 让“开发者可得性”更具体，收购补上物理互联能力

2025 年 4 月，Blackhole 开发产品发布：p100 定价 999 美元、p150 定价 1,399 美元、含 4 个 Blackhole 处理器的 TT-QuietBox 定价 11,999 美元；公司称 Blackhole 采用 6nm、拥有更快 NoC、更高内存密度与更多集成 RISC-V cores。其同时列出 TT-Forge、TT-NN、TT-Metalium 与 TT-LLK，并称代码在 GitHub 开源。[S6] 这把“可供开发者购买和试验”的边界设得相当清楚，却并未公开证实批量服务器订单、单位成本或产品生命周期支持。

2025 年 7 月公司收购 Blue Cheetah Analog Design。公告称被收购方此前已为 Tenstorrent chiplet 产品提供先进互联；其 BlueLynx D2D IP 支持 OCP BoW 与 UCIe，带来 D2D、DDR、SerDes 能力。[S11] 从战略上看，这使 Tenstorrent 由“用 chiplet”向“掌握 chiplet 关键物理层能力”再推进一步，对机器人自研异构 SoC/传感接口尤其有参考价值。反面是收购并不会自动把 Blue Cheetah 的历史客户、收入或 IP 的全部可自由再许可权转移为 Tenstorrent 的可验证商业资产。

### 6. 2026 截至研究日：从开发产品继续向紧凑设备与系统主张延伸

2026 年 1 月，公司与 Razer 展示首代紧凑式 Wormhole 外接加速器，使用 Thunderbolt 4/5，称最多可串接四台，可运行 LLM、图像生成和 AI/ML；公告同时说价格与可得性“more information to come”。[S7] 因此它是发布/展示而非已销售产品。

公司另发布 Galaxy Blackhole 系统资料：32 颗 Blackhole、23 PFLOPS Block FP8、1TB DRAM、最多 56 个 800G Ethernet，起价 11 万美元；四系统 supercluster 起价 44 万美元。公告列出 Equinix Distributed AI Hub、OrionVM、BetterBrain、Virtu、Turiyam、Cirrascale、ai& 等部署/合作方。[S12] 这些指标和名单可作为 POC 的供应商假设，但都是厂商口径，且未披露统一模型、精度、并发、功耗、合同与收入口径。它们不构成跨厂商性能排名，也不构成具名采购订单清单。

## 融资与资本史

| 时间 | 事件 | 金额/估值 | 已披露投资方或含义 | 审慎解读 |
|---|---|---:|---|---|
| 2021-05-20 | 一轮融资 | over 2 亿美元；估值 10 亿美元 | Fidelity Management and Research Company 领投；Eclipse、Epic CG、Moore Capital。[S1] | 未公开轮次、股权和融资后现金，不能用其计算控制权。 |
| 2023-08-03 | 战略 up-round | 1 亿美元 | Hyundai Motor Group、Samsung Catalyst Fund 共同领投；Fidelity Ventures、Eclipse、Epiq、Maverick 等。[S3] | 是股权/战略关系，不是采购承诺。 |
| 2024-12-02 | Series D | over 6.93 亿美元；融资前估值 20 亿美元 | Samsung Securities、AFW Partners 领投；XTX、LG Technology Ventures、Hyundai、Fidelity、Bezos Expeditions、HOOPP 等。[S4] | 公告未给出完整 cap table、优先权或收入确认；约 1.5 亿美元 closed deals 不可相加为融资或收入。 |

三笔明确公告金额的简单下限相加为 **over 9.93 亿美元**；这是对上述三次公告的算术汇总，而不是公司披露的累计融资、也不含未披露轮次，不能用于估算现金余额或估值回报。[S1][S3][S4]

## 合作网络：按关系性质拆分

### 投资方/股东（不等于客户）

| 对方 | 可确认关系 | 证据边界 |
|---|---|---|
| Fidelity Management and Research Company、Eclipse、Epic CG、Moore Capital | 2021 轮投资方。[S1] | 未披露当前持股比例。 |
| Hyundai Motor Group、Samsung Catalyst Fund | 2023 战略轮共同领投。[S3] | 不等于现代或三星采购/量产。 |
| Samsung Securities、AFW、XTX、LG Technology Ventures、Bezos Expeditions、HOOPP 等 | Series D 领投/参与方。[S4] | 部分为金融/产业资本，不可用名单推导客户或供应商。 |

### 客户/订单/部署（证据强度单列）

| 对方/线索 | 已公开可写事实 | 不可越界处 |
|---|---|---|
| 未具名 IP 客户 | 公司称向希望拥有和定制硅的客户许可 AI 与 RISC-V IP。[S3] | 未公布客户、合同额、授权范围或量产。 |
| LSTC | 选择 Tenstorrent RISC-V/chiplet IP，并合作进行边缘 2nm accelerator co-design。[S9] | 不等于该芯片已量产、已付授权费或形成规模订单。 |
| Galaxy 公告所列伙伴 | 公司称与/已部署于 Equinix Distributed AI Hub、OrionVM、BetterBrain、Virtu、Turiyam、Cirrascale、ai& 等。[S12] | 未披露每方采购额、系统数量、持续性或收入确认。 |

### 产业与供应链合作

| 对方 | 关系 | 对战略的意义 |
|---|---|---|
| LG | 公司公告称双方将合作开发未来智能电视、汽车及 Tenstorrent 数据中心的 AI/RISC-V/video codec chiplets，文本含 potentially/eventually 等前瞻措辞。[S10] | 展示应用扩展与 chiplet 构想，非量产客户证据。 |
| MosChip | RISC-V 物理设计、DFT、验证和 RTL 服务合作。[S16] | 补充设计服务与工程供给；不代表终端需求。 |
| Rapidus | 在 LSTC 项目中承担面向 2nm 制造与先进封装目标的关联角色。[S9] | 是目标供应链链条，非已量产供货。 |
| Blue Cheetah | 已收购，带来 D2D/DDR/SerDes 及 BoW/UCIe 相关能力。[S11] | 需核验人员留存、IP 权属、客户合同和产品整合里程碑。 |

### 技术、开源与开发者生态（不等于高校渊源）

| 项目 | 可确认能力 | 限制 |
|---|---|---|
| TT-NN / TT-Metalium | TT-NN 为 Python/C++ 神经网络算子库；TT-Metalium 为低层编程模型，公开 kernel 示例、设备管理、调试与 profiling 工具。[S14] | 公开代码不等于外部社区、企业支持或生产稳定性已被独立验证。 |
| TT-Forge-ONNX / TT-XLA | TT-Forge-ONNX 处理 ONNX、TensorFlow、PaddlePaddle，并说明 PyTorch/JAX 更建议用 TT-XLA；前者明确为单芯片配置。[S15] | 框架入口和单芯片编译不证明多节点训练/后训练。 |
| 开发者门户/Discord/GitHub | 官方产品公告和文档提供 Developer Hub、文档、版本发布、示例、bounty/issue 与社区入口。[S6][S13][S14] | 必须以活跃维护、第三方贡献、问题解决时长和真实交付验证质量。 |
| 高校/科研 | 截止日可查的一手资料未证明稳定的高校成果转化或联合实验室链条。 | 不以工程师履历或 RISC-V 社区泛关系虚构高校合作。 |

## 二、横向分析：竞争不是“谁有更多 TOPS”，而是谁承担迁移与系统风险

Tenstorrent 面对的是竞品充分的场景。NVIDIA 是默认训练/推理工作流，AMD 是最接近的第二 GPU 供应，Groq 与 Cerebras 是不同形态的非 GPU 专用计算，SiFive/Arm/Andes 等则是 RISC-V/CPU IP 的授权基准。没有统一的第三方、同模型同精度同并发同成本基准，本节不做绝对性能排名。

| 维度 | Tenstorrent | NVIDIA CUDA/GPU | AMD Instinct/ROCm | Groq | Cerebras | RISC-V CPU/IP 基准 |
|---|---|---|---|---|---|---|
| 核心交付 | Tensix 卡/系统 + RISC-V/IP + chiplet + 软件 | GPU、网络、CUDA 全栈 | GPU 与 ROCm | 面向推理的专用 LPU/服务 | wafer-scale 系统/云 | CPU core/IP、生态/支持 |
| 客户主要购买理由 | 非 GPU 可编程路径、开发硬件、定制硅选择权 | 生态、工作负载广度、可得性 | 第二源与较连续迁移路径 | 低延迟/高吞吐推理 | 减少模型分片/通信的系统方案 | 可定制 CPU 与软件生态 |
| Tenstorrent 的相对强项 | 同时拥有低层软件、AI 加速器和 RISC-V/chiplet 叙事 | 无法在成熟度、生态广度上宣称等同 | 可避免完全落入 GPU 程序模型 | 不只押推理，保留开发与 IP 选项 | 不必承担 wafer-scale 一体化硬件复杂度 | 不止 CPU IP，能够联动 AI 加速器/软件 |
| 核心短板/风险 | 公开训练证据、外部生态、量产订单、TCO 和供应保障不足 | 开发者迁移与替换成本极高 | 仍需对比 ROCm 的兼容与供给 | 专用推理公司可能在局部 KPI 更强 | 更大系统客户可能更偏好系统级方案 | IP 大厂可能在授权、验证、支持上更成熟 |

### 1. NVIDIA：真正的对手是默认工作流

对机器人公司，NVIDIA 的优势不是单个芯片峰值，而是 CUDA、PyTorch/框架后端、NCCL、TensorRT、工具、云实例、OEM 与人才市场共同构成的“可快速切换任务”的选项价值。视觉、语言、VLA、仿真、数据处理和控制相关模型随研发迅速变化，成熟 GPU 栈能把模型变更的组织成本降到较低。Tenstorrent 不能仅以硬件峰值或“开源”抵消这一点。

Tenstorrent 的真正挑战点是：针对已稳定的推理图或明确的专用加速器工作负载，能否以 TT-Metalium/TT-NN 的显式编程和编译优化，获得可验证的时延、能耗、成本或供应安全收益。[S14] 若能，竞争并非“替掉所有 GPU”，而是把某一段确定工作负载从 CUDA 依赖中切出；若不能，团队会承担新的编译、调优和故障归因成本。

### 2. AMD：第二 GPU 供应和更连续的迁移路线

AMD 的对照意义在于 ROCm 维持 GPU 语义和主流框架的连续性。即便用户需要适配，已有 PyTorch/Hugging Face/分布式训练资产通常不必像转入 Tensix 一样重新审视设备内核、算子覆盖和性能模型。因此 AMD 更适合作为主训练平台的供给、价格和迁移风险基准；Tenstorrent 则应以某些明确模型/算子、可编程边缘/专用 SoC 或非 GPU 供应链要求来证明增量价值。

### 3. Groq 与 Cerebras：同属“非 GPU”，但风险落点不同

Groq 将价值集中于确定性、低延迟生成式推理；它可成为云端语言规划或语音链路的候选，却不当然覆盖 Tenstorrent 的 IP 与开发系统机会。Cerebras 则把大量计算、存储和通信集成到 wafer-scale 系统，客户购买的是系统级训练/推理能力。Tenstorrent 位于两者之间：卡和工作站的进入门槛较低，又尝试通过 Galaxy 进入系统，还用 RISC-V/chiplet 打开定制硅。

这是一种有吸引力但困难的组合。客户可能愿意以低价格开发卡开始试验，但卡级用户未必转成大系统客户；IP 客户也未必采购自家加速器。投委会应分别建立“硬件产品、IP 授权、系统/云、软件生态”四张漏斗，而不能用任何一项的新闻替代另三项的商业验证。

### 4. 用户工程视角：技术能力与可用性不是同一件事

公开仓库中，TT-NN 提供 Python/C++ 神经网络算子库，TT-Metalium 提供 kernel 级开发；其中有多芯片以太网基础、scale-up/scale-out 编程、CCL 调优，以及 Visualizer、Exalens、SMI、Watcher、Inspector、Tracy 等工具。[S14] TT-Forge-ONNX 可从 ONNX、TensorFlow、PaddlePaddle 编译，且项目说明 PyTorch/JAX 走 TT-XLA。[S15] 这些材料足以让工程团队在 POC 中检查可编程性，而不是只能使用固定模型转换器。

但是可用性仍有四个待回答问题：第一，PyTorch/JAX 接口支持到哪一版本与算子集合，失败时的 fallback 是什么；第二，训练、LoRA/后训练、混合精度和分布式容错是否是对外支持路径；第三，VLA/多模态中视觉编码器、时序/状态缓存和自定义控制算子能否稳定运行；第四，多卡/多主机通信、监控、升级、容灾和安全合规能否达到生产要求。官方模型矩阵或性能表本身也提示其结果来自特定 demo，其他 runtime 会变化。[S14]

## 三、横纵交汇：早期选择同时制造了选择权与执行负担

Tenstorrent 的纵向路线解释了它今天的独特位置：从 2021 年“开发者可编程 AI 计算机”的定位，经过 2023 年 chiplet/软件融资、2024 年可接触的多芯片开发机与 RISC-V co-design，到 2025 年低价 Blackhole 开发卡和 D2D 收购，它并非临时把软件附在一颗芯片上，而是在持续建设硬件—软件—IP 的组合。[S1][S3]–[S6][S9][S11]

也正因为如此，最大风险不是“芯片有没有算力”这么单一。每扩展一条路径都需要不同的胜利条件：卡要有开发者，系统要有交付与运维，IP 要有可制造/可授权边界，开源软件要有模型覆盖和社区，云/生态要有客户与 SLA。资金规模能够给路线时间，却不能替代其中任何一个漏斗的转化。对于人形机器人公司，这带来一项实用结论：应把 Tenstorrent 当作**架构、IP 和特定推理工作负载的期权**，而不是把它预设为通用训练平台的直接替代品。

| 场景 | 触发条件 | 对公司/机器人的含义 | 应对 |
|---|---|---|---|
| 上行情景 | Blackhole/Galaxy 的可复现 TCO 与软件适配提升；IP/co-design 进入流片/量产；外部客户与支持生态扩大 | 加速器销售、IP 授权和软件相互反馈，形成非 CUDA 的实用平台 | 扩大战略合作，争取 IP 路线图、共同 benchmark 与优先技术支持。 |
| 基准情景 | 开发卡持续存在，IP 合作推进但大规模订单不透明；软件适合部分模型 | 成为小众但重要的推理/定制硅供应商 | 保留小规模采购和联合验证，不把关键训练交付绑定。 |
| 下行情景 | 软件训练/算子覆盖和多卡可靠性无法赶上研发需求；供应、成本或系统交付不足；合作未转量产 | 多条产品线消耗资本却不形成规模收入 | 限制暴露；保留可迁移模型与数据资产，避免排他和长期最低采购。 |

## 四、面向人形机器人的行动方案

### 最合适的验证场景

1. **非安全关键的本地/边缘推理 PoC**：以语音、视觉理解、小型语言规划或日志分析等可隔离链路开始，而非运动控制闭环。比较端到端 p50/p99 时延、功耗、热、模型精度、冷启动、恢复和维护工时。
2. **云端/机房推理 PoC**：用固定版本的 VLM/LLM 或数据处理模型测试 n150/n300、p150 或 Galaxy；要求同一批数据、上下文、并发、量化、精度和 SLA 与 GPU 基线对齐。[S5][S6][S12]
3. **自研 SoC 架构研究**：围绕 RISC-V CPU、AI accelerator、D2D/SerDes、传感/实时控制域的切分开展技术交流；在取得 NDA 后审查 Ascalon、chiplet、UCIe/BoW、编译器与 IP 授权边界。[S9][S11]

### 不应先做的事

- 不把 Tensix 放入人形机器人的安全关键运动控制主路径；公开材料不足以证明实时性、功能安全、生命周期与故障诊断闭环。
- 不在尚未跑通训练/后训练、分布式通信和运维前，用其替代主力 CUDA 训练栈。
- 不因 Hyundai/Samsung/LG/LSTC、Galaxy 伙伴或开源仓库就认定其拥有汽车/机器人量产订单、长期供货或云服务能力。

### 90 天尽调与 PoC 门槛

| 周期 | 工作 | 通过门槛/证伪条件 |
|---|---|---|
| 0–30 天 | 法人、出口/地域、供货、保修、IP 许可、开源许可证与安全合规核验；拿到支持矩阵和版本冻结清单 | 无法明确 Tenstorrent Holdings/USA 的签约主体、授权地域、转授权、维护期限或出口可行性即停止商务推进。 |
| 31–60 天 | 同模型 GPU 对照：VLM、语音/LLM、图像生成或数据处理各至少一项；记录精度、TTFT、吞吐、p99、功耗、失败率和工程人时 | 若端到端 KPI 无显著改进，或调优/迁移人时吞没硬件收益，只保留技术观察。 |
| 61–90 天 | 多设备、升级/回滚、故障恢复、监控、模型更新与供应支持演练；如考虑 IP，再审查 RTL、验证、NRE、流片、D2D/SerDes、功能安全与责任分配 | 没有可执行的 support SLA、BOM/供货计划、IP 权属和量产责任，不进入战略投资、排他或产品路线图。 |

## 五、冲突、未确认事项与反对证据

| 事项 | 已知支持证据 | 反对/限制 | 下一步验证 |
|---|---|---|---|
| 软件是否是 CUDA-like 平台 | 多代产品、TT-Metalium/TT-NN、编译前端、模型、版本、调试与多设备资料齐备。[S13]–[S15] | 没有公开充足资料证明主流框架上的训练/后训练这一硬条件，也没有独立大规模用户证据。 | 取得训练/LoRA、算子覆盖、通信、版本兼容、生产客户与迁移案例。 |
| 商业化与收入 | 可订购的开发产品、IP 许可表述、约 1.5 亿美元 closed deals、Galaxy 伙伴名单。[S3][S4][S6][S12] | 无审计收入、订单、回款、单位经济或客户集中度披露。 | 取得按硬件/IP/系统/云拆分的收入、backlog、毛利、DSO 与客户合同。 |
| 现代、三星、LG 的产业协同 | 现代/三星为投资方；LG 有 chiplet 合作。[S3][S10] | 投资与合作不是采购；LG 公告含大量前瞻措辞。 | 逐项核验产品导入、量产 SOP、排他、联合 IP 与收入。 |
| 日本/2nm 路线 | LSTC 选择 IP/co-design，Rapidus 参与制造/封装目标。[S9] | 没有量产、良率、PPA、客户付费和供货信息。 | 确认 tape-out、工艺 PDK、封装、商业合同和里程碑责任。 |
| Blue Cheetah 收购协同 | 收购事实与 D2D/DDR/SerDes 范围明确。[S11] | 未披露资产/对价、留任、专利权属和客户合同处理。 | 法务/IP 尽调和产品整合路线图。 |

## 六、产业链分类复核（研究报告末尾结论）

### 主分类：**1.4 其他 AI 芯片架构（Tensix 专用 AI 加速器 / RISC-V / chiplet）—高置信**

这是最能反映其当前价值创造的分类。公司交付/销售的是非 GPGPU 的 AI processors、开发卡、工作站和系统，并同时许可 AI/RISC-V IP、推进 chiplet；Tensix 专用加速器、可编程软件和 RISC-V/互联设计构成组合，既不属于图形 GPU，也不能因有 RISC-V CPU IP 而简单归为 1.3 NPU。[S3][S5][S6][S9][S11]

### 不设正式次分类 2.1 加速计算平台（CUDA-like）：**条件不满足，保留观察项**

按《产业链分类规则》的五项硬条件与 100 分维度复核：

| 维度 | 评分 | 证据与判定 |
|---|---:|---|
| 软件栈完整度（40） | 34 | 有运行/设备管理、TT-Metalium 低层编程、TT-NN 算子库、TT-Forge/TT-XLA 前端、多设备/CCL资料和调试工具。[S13]–[S15] 但公开资料不足以核验生产级框架后端覆盖、通信成熟度和所有组件的一致发布承诺。 |
| 可编程与可扩展性（20） | 18 | TT-Metalium 提供 kernel/设备编程示例，TT-NN 提供 Python/C++ API；不只是模型转换器。[S14] |
| 工作负载广度（15） | 7 | 有 LLM、视觉、音频等模型示例和框架前端。[S14][S15] **但未找到足以确认的主流框架训练或后训练公开支持证据**，故硬条件 4 不通过。 |
| 开发者产品化（15） | 14 | 文档、开源代码、版本发布、开发者门户、示例、issue/bounty 与实际硬件产品均可见。[S6][S13][S14] |
| 多代演进/通信/真实部署（10） | 7 | Grayskull/Wormhole/Blackhole 多代，公开多设备/通信材料与系统公告；但独立生产客户、运维质量和规模不透明。[S1][S5][S6][S12][S14] |
| **合计** | **80/100** | 分数体现已公开的软件资产，而非性能或生态规模；由于硬条件 4 未满足，即使总分超过 70，也**不得**列入 2.1。 |

同时不设 2.2 为正式次分类：TT-Metalium/TT-Forge 的确涉及算子开发、迁移与适配，但截至截止日其可验证的商业主承载仍是自家 AI 芯片/IP，而不是独立、跨硬件的算子软件业务。也不列 5.1/5.2：其软件的主要作用是绑定自有硬件，且训练/推理框架的商业边界与完整度均未充分披露。

## 证据/来源审计表

| 编号 | 一手来源 | 可支撑的关键事实 | 发布日 / 访问日 |
|---|---|---|---|
| S1 | [2021 融资及 Grayskull/DevCloud 公告](https://tenstorrent.com/newsroom/tenstorrent-raises-over-200-million-at-1-billion-valuation-to-create-programmable-high-performance-ai-computers) | over 2 亿美元、10 亿美元估值、当时管理层、Grayskull/DevCloud 计划 | 2021-05-20 / 2026-08-11 |
| S2 | [公司 Vision 页面](https://tenstorrent.com/vision) | 公司技术领域与全球办公信息 | 页面现行 / 2026-08-11 |
| S3 | [2023 战略 up-round 公告](https://tenstorrent.com/newsroom/tenstorrent-raises-a-strategic-up-round) | 1 亿美元、投资方、CEO、processor/IP 许可表述、资金用途 | 2023-08-03 / 2026-08-11 |
| S4 | [Series D 公告](https://tenstorrent.com/newsroom/tenstorrent-closes-693m-of-series-d-funding-led-by-samsung-securities-and-afw-partners) | over 6.93 亿美元、20 亿美元 pre-money、投资方、约 1.5 亿美元 closed deals | 2024-12-02 / 2026-08-11 |
| S5 | [Wormhole 开发套件与工作站](https://tenstorrent.com/newsroom/tenstorrent-launches-next-generation-wormhole-based-developer-kits-and-workstations) | n150/n300、LoudBox/QuietBox、8 processors、预购/订购与软件 | 2024-07-18 / 2026-08-11 |
| S6 | [Blackhole 开发产品](https://tenstorrent.com/newsroom/tenstorrent-launches-blackhole-developer-products-at-tenstorrent-dev-day) | p100/p150/QuietBox 定价、6nm、软件/开发者门户 | 2025-04-03 / 2026-08-11 |
| S7 | [Razer 紧凑式 Wormhole 设备](https://tenstorrent.com/newsroom/tenstorrent-unveils-first-gen-compact-ai-accelerator-device) | Thunderbolt、最多四台串接、价格/可得性未定 | 2026-01-06 / 2026-08-11 |
| S8 | [隐私政策](https://tenstorrent.com/privacy) | 控股/运营主体需区分的线索 | 页面现行 / 2026-08-11 |
| S9 | [LSTC 日本 RISC-V/chiplet 合作](https://tenstorrent.com/newsroom/tenstorrent-risc-v-and-chiplet-technology-selected-to-build-the-future-of-ai-in-japan) | IP 选择、co-design、2nm/Ascalon/Rapidus 边界 | 2024-02-27 / 2026-08-11 |
| S10 | [LG chiplet 合作](https://tenstorrent.com/newsroom/tenstorrent-partners-with-lg-to-build-ai-and-risc-v-chiplets-for-smart-tvs-of-the-future) | 合作方向及前瞻措辞 | 2023-05-30 / 2026-08-11 |
| S11 | [收购 Blue Cheetah](https://tenstorrent.com/newsroom/tenstorrent-acquires-blue-cheetah-analog-design) | 收购、D2D/DDR/SerDes、BoW/UCIe | 2025-07-01 / 2026-08-11 |
| S12 | [Galaxy Blackhole 系统公告](https://tenstorrent.com/newsroom/tenstorrent-enables-ai-at-scale-with-industry-leading-performance) | 系统规格、起价、合作/部署名单（厂商口径） | 页面现行 / 2026-08-11 |
| S13 | [官方文档首页](https://docs.tenstorrent.com/) | 软件栈、硬件、工具、开发者资源目录 | 页面现行 / 2026-08-11 |
| S14 | [tt-metal / TT-NN / TT-Metalium 开源仓库](https://github.com/tenstorrent/tt-metal) | 算子库、低层编程、多设备、工具、版本、模型示例与许可证 | 仓库现行 / 2026-08-11 |
| S15 | [TT-Forge-ONNX 开源仓库](https://github.com/tenstorrent/tt-forge-fe) | ONNX/TF/Paddle 前端、PyTorch/JAX/TT-XLA 指引、单芯片限制 | 仓库现行 / 2026-08-11 |
| S16 | [MosChip 设计服务合作](https://tenstorrent.com/newsroom/tenstorrent-and-moschip-partner-on-high-performant-risc-v-design) | 物理设计、DFT、验证、RTL 服务合作 | 2024-03-13 / 2026-08-11 |

## 方法说明

本报告按横纵分析法把纵轴的团队/融资/产品/IP/收购演变，与截止日的竞争结构和用户工程约束交叉。所有未获独立披露的收入、出货、客户采购、性能、TCO、训练能力、IP 条款和供应链事实均保留为尽调问题；判断为研究者意见，不替代合同、审计报告或现场测试。
