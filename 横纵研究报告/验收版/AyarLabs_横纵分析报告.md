# Ayar Labs 横纵分析报告：把光纤推进封装，仍不等于卖出一张网络

> 研究对象：Ayar Labs, Inc.（简称 Ayar Labs）  
> 研究截止日：2026-08-11｜公司类型：共封装光学（CPO）与光 I/O chiplet 公司  
> 证据口径：优先公司一手公告、产品规格与合作方材料；「生产就绪」「客户」「性能」均保留公司披露属性。

## 执行结论与研究边界

**一句话定义。**Ayar Labs 是把硅光光引擎 TeraPHY™ 与外置多波长光源 SuperNova™ 做成可经 UCIe 集成到 XPU/交换芯片封装内的共封装光学（CPO）方案，试图替换 AI scale-up 架构中限制带宽、距离和功耗的短距铜互连。[S1][S2]

它的价值不在于计算，而在于**让计算芯片之间更高带宽、更远距离、更低功耗地移动数据**。TeraPHY 是光 I/O chiplet，不是 GPU、NPU 或光学矩阵计算芯片；SuperNova 是给光引擎供光的外置激光源，也不是面向电信运营商销售的传统收发模块。产品页面列出 TeraPHY 最高 8Tbps 双向带宽、10ns/chiplet 延迟（不含光纤飞行时间）、BER <1e-12、毫米到公里的连接范围，并明确写明规格为 preliminary、可能改变。[S2]

截至截止日，Ayar 已从原型走到多代硅片、量产准备和生态合作阶段，但对投资/采购最重要的边界依然存在：

1. **可验证的交付层级正在上升，但独立收入和客户订单不透明。**公司 2022 年称首次按合同进行 volume commercial shipments、预计年底出货数千个 in-package optical interconnect；2026 年称已出货多代 TeraPHY、部署数千个 optical engine，并以 5 亿美元 Series E 扩大高产量生产和测试能力。[S3][S4][S5] 三种说法可证明持续产品化，不能证明 2026 年的营收、毛利、每客户部署量、返修率或某个 hyperscaler 的已签采购额。
2. **最新融资强，但融资不是订单。**2026 年 3 月 Series E 为 5 亿美元、投后估值 37.5 亿美元、累计资金 8.7 亿美元；2024 年 Series D 为 1.55 亿美元、当时累计 3.7 亿美元、估值逾 10 亿美元。[S4][S6] 这些数字说明资本可支撑产线、测试与生态建设，不能将其当成销售额或量产良率的替代。
3. **合作是其护城河，也是商业化门槛。**公司与 GlobalFoundries、Lumentum、GUC、Wiwynn、NVIDIA NVLink Fusion、Alchip/MediaTek 等形成从硅光、外置光源、先进封装、ASIC 到机架的链条。[S7][S8][S9][S10][S11] 但公开材料主要是共同设计、兼容、参考架构、生态加入或私密预览；没有披露可归因于 Ayar 的量产订单、交换机/路由交付和网络 SLA。

**对人形机器人公司的动作结论：**不建议当前直接投资、并购或采购。机器人公司近期的算力问题多发生在车/机体内、边缘设备、训练 GPU 集群和云推理服务中；Ayar 的核心产品面向 hyperscale AI scale-up 封装与机架，购买决策者是定制 XPU/交换 ASIC、服务器 ODM、系统厂商或云厂商，不是机器人 OEM。若公司未来自建数千 GPU 以上、明确受制于跨机架 scale-up bandwidth/power，才应通过服务器/ASIC/网络伙伴进行技术尽调；在此之前，追踪即可。

## 一、纵向分析：从学术光处理器到 CPO 量产赌局

### 1. 起源（2010–2015）：先证明「处理器可以用光通信」

Ayar Labs 的技术根源来自 MIT、UC Berkeley 和 University of Colorado Boulder 长期硅光研究。公司称，创始团队在 2010–2015 年做出「第一颗用光通信的处理器」，相关结果发表于 *Nature*；这是一项由 DARPA 资助的十年研究合作的产物。公司在 2015 年成立。[S5][S7]

共同创始人 Mark Wade 现任 CEO，曾任 CTO 和工程高级副总裁；公司称他领导过世界首个以光通信处理器的光学设计，具 University of Colorado 博士学位。Vladimir Stojanovic 为共同创始人和 CTO，技术叙事的核心不是把计算搬到光域，而是尽可能早地把芯片 I/O 从电子/铜换成光子/光纤。[S5][S12]

这条初始选择决定了 Ayar 的产品形态：它必须同时解决 CMOS/硅光制造、微环调制器、外置激光、波分复用、封装、光纤可维护性、UCIe 电接口和系统热设计。相较于传统可插拔光模块，优点是把光靠近计算封装来减少电 SerDes 的短距瓶颈；代价是失去了「坏了就换一个模块」的天然可维护性，必须把外置光源、可拆光纤、封装测试及机架服务性设计成系统能力。

### 2. 制造链先行（2017–2021）：从 GF 45nm 到早期 CPO 演示

2017 年，Ayar 与 GlobalFoundries（GF）宣布共同开发及制造 CMOS optical I/O，采用 GF 45nm CMOS 工艺；公告称目标是相对铜 I/O 获得最高 10 倍带宽和最高 5 倍更低功耗，且以多芯片模块形式与客户 ASIC 同封装。[S7] 这些是合作目标/厂商表述，而非已实现的客户性能；其意义在于 Ayar 很早就把「fab、封装和系统」作为产品的一部分。

2019 年，公司被选为 Intel 的 DARPA PIPES 项目光学方案；2020 年展示单片电子/光子方案，2021 年展示首个用于 CPO 的 1Tbps optical link。[S5] 纵向看，这些里程碑逐步证明原理、硅光集成和链路能力，仍属于技术验证阶段。对投资者而言，光 I/O 的壁垒也在此形成：一个小公司要穿越从论文到客户 ASIC 的鸿沟，不是多流片一次就能完成。

### 3. 2022：第一次真正面对量产和光源供应链

2022 年是商业化转折。4 月，Ayar 获 1.3 亿美元 Series C，由 Boardman Bay Capital Management 领投，HPE 与 NVIDIA 作为新增战略投资者；公司称将用资金完成行业质量/可靠性认证、扩产并在当年开始规模生产。[S3] 同一公告还称已进行首批「under contract」的 volume commercial shipments，预计当年末出货数千个 in-package optical interconnect。[S3]

这段表述需要精确理解：它比「实验室样片」强，说明存在合同和实际商业发货；但未披露客户、订单金额、最终验收、持续供货或收入确认。因而本报告将其记为**已发生的量产级商业发货主张**，而非「已由公开财务证明的规模收入」。

同年 3 月，Ayar 与 Lumentum 合作供给符合 CW-WDM MSA 的外置激光源，目标是 high volume。公告明确指出，外置光源是其光 I/O 方案的必要部件，并提出外置光源、GF Fotonix 硅光平台、封装和标准共同构成规模化供应链。[S8] 这也暴露出 Ayar 的系统性风险：即使 TeraPHY 出色，光源、纤维、连接器、封装良率、测试与热设计任一环节滞后，客户 ASIC 的整体项目也无法量产。

### 4. 2023–2024：从带宽演示到「commercial-ready」叙事

2023 年，Ayar 公开演示 4Tbps 光学方案；2024 年 12 月完成 1.55 亿美元 Series D，由 Advent Global Opportunities 和 Light Street Capital 领投，AMD Ventures、Intel Capital、NVIDIA、3M Ventures、Autopilot 等参与。公司称累计融资达 3.7 亿美元、估值逾 10 亿美元，并为按客户路线图进行高产量制造做准备。[S5][S6]

这轮投资把关键竞争方和潜在客户放进同一张资本表：AMD/NVIDIA 等战略投资使 Ayar 更靠近下一代加速器设计生态，但绝不等于这些公司已选择、采购或量产采用 Ayar。反过来，Ayar 与多个 XPU/ASIC 生态方合作，也可能因客户定制、标准演变、竞争性 CPO 实现而延长设计导入周期。

2024 年公司将其产品描述为「industry’s first commercially viable optical interconnect」并称采用开放标准。[S6] 这应作为公司定位阅读。光 I/O 采用 UCIe、OCI-MSA、CW-WDM MSA 等标准确实降低集成阻力，但真正的 CPO 量产仍需要每个客户的 package、I/O die、热、机械、光纤管理、测试和供应链协同，标准兼容不能替代客户设计 win。

### 5. 2025：UCIe optical chiplet 和 ASIC 生态扩张

2025 年 3 月，Ayar 发布其称为世界首个 8Tbps UCIe optical chiplet 的产品，展示把光 I/O 以 UCIe 标准接入 AI scale-up 架构的路径。TeraPHY 页面列出 8 个全双工 optical port、每 port 16 个 WDM transceiver slice、UCIe electrical interface 和可配置 crossbar，同时标注规格为 preliminary、细节在 NDA 下提供。[S2][S9]

同年与 GUC 的合作更接近可制造系统：双方探索把 TeraPHY 集成到 GUC 的先进 ASIC/封装流程，提出一个 XPU 多芯片封装参考设计，声称可以提供超过 100Tbps full-duplex 光接口，并处理 UCIe、信号/供电完整性、热、stiffener、可拆光纤及 warpage 等问题。[S10] 但公告措辞是「exploring」「future customers」，所以这是**参考设计和联合工程**，不是某 hyperscaler 的量产订单。

这也是 Ayar 相对纯光模块公司的分水岭：它逐渐变成 custom-ASIC/CPO 的设计伙伴。壁垒在于能进入 XPU 封装层；风险在于销售周期被客户 SoC 节奏锁住，任何一代封装或 UCIe/SerDes 标准改变都会推迟收入。

### 6. 2026：Series E、机架参考设计与 NVIDIA 生态

2026 年 3 月，Ayar 完成 5 亿美元 Series E，Neuberger Berman 领投；新投资者包括 Alchip、ARK Invest、Insight Partners、MediaTek、QIA、Sequoia Global Equities、1789 Capital，AMD、NVIDIA 等也参与。公司称总融资 8.7 亿美元、估值 37.5 亿美元，并计划扩展 high-volume production/test capacity、全球业务和新竹办公室。[S4] 这表明资本市场愿意为 CPO 的潜在规模和供应链提前下注，但也把回报压力集中到「能否把客户定制的光学封装变成高产量可测产品」。

3 月，Ayar 与 Wiwynn 合作开发光连接的 rack-scale AI 系统，宣称目标架构可扩至 1,024 个 AI accelerator 以上、每 accelerator 超过 100Tbps optical connectivity，并在 OFC 对选定客户/媒体/分析师进行私人预览。[S11] 这些数值是联合参考架构目标，不能表述为已交付机架或公开客户部署。

6 月，公司加入 NVIDIA NVLink Fusion 生态，宣布产品将与 NVIDIA optical/SerDes 技术进行光电兼容，以使 hyperscaler 和系统创新者能在 NVLink Fusion 周围构建 CPO 架构。[S9] 加入生态、兼容和共同面向客户极具战略价值，却不等同于 NVIDIA SKU 内已经采用 TeraPHY，更不等同于 NVIDIA 或其云客户有不可取消采购承诺。

## 二、产品、技术与收入承载物：光 I/O 不是光计算，也不是完整网络

### 1. TeraPHY 和 SuperNova 的分工

| 层次 | 产品/能力 | 已披露规格或状态 | 客户真正购买的东西 |
|---|---|---|---|
| 光 I/O engine | TeraPHY | 最高 8Tbps 双向、10ns/chiplet（不含光纤飞行）、BER <1e-12；UCIe、8 全双工光 port；规格 preliminary。[S2] | 放在 XPU/交换 ASIC 封装附近的高带宽低功耗 I/O。 |
| 外置光源 | SuperNova | 最高 16 个波长，向 16 根光纤供光、可承载 256 data channel/16Tbps 双向；CW-WDM MSA。[S13] | 可替换的光源、热隔离与服务性，而非单独的计算能力。 |
| 系统/机架 | CPO 参考设计、Wiwynn 联合架构 | 计划解决光纤管理、液冷、封装/AI ASIC 集成和制造；展示/私密预览。[S11] | 由系统伙伴交付的机架方案，非 Ayar 已证明的独立网络设备。 |

TeraPHY 把电 I/O 从 chip/package 边界尽早转为光纤：标准 UCIe 电接口从逻辑/IO die 引入，微环调制器和波分复用从封装出光，SuperNova 从相对低热、可替换的位置送来多波长连续光。其宣传的优势是更长 reach、更高 shoreline bandwidth density、更低延迟/功耗；但端到端系统收益还取决于 XPU memory hierarchy、交换/协议、GPU 软件、光纤布线、液冷、误码恢复、光源冗余和现场更换。[S1][S2][S13]

### 2. 性能主张的正确读取

产品页称相较传统铜和可插拔光学，TeraPHY 有 10 倍更高带宽、10 倍更低延迟、3–5 倍更高能效，以及 2Tbps/mm shoreline bandwidth density；TeraPHY 单页又称相对 pluggable optics + electrical SerDes 可获 5–10 倍带宽、10 倍更低延迟和 4–8 倍更高能效。[S1][S2] 这些不同范围说明口径和比较基线不同。报告不平均或挑选更大数字，而是将其视为厂商在特定架构中的宣传目标。

采购或投资模型所需要的不是「8Tbps」本身，而是：每 lane/port 的可用带宽与协议开销、封装到光纤的全链路功耗、距离和 BER 下的 FEC/RAS、激光寿命、温度漂移、光纤/连接器可维护性、yield、测试时间、单位成本，以及与实际 XPU/交换机的 P99 通信延迟。现有公开资料不足以在这些维度与铜互连、NVIDIA/AMD 互连或其他 CPO 方案做严格排名。

### 3. 供应链和制造是技术的一半

| 环节 | 已确认关系 | 重要性与限制 |
|---|---|---|
| 硅光制造 | GF 自 2017 年合作，涉及 45nm 与后续 Fotonix 平台；Ayar 亦提及 TSMC 生态。[S7][S6] | 支持硅光成熟化；具体节点、产能、良率和订单未公开。 |
| 光源 | Lumentum 合作开发 CW-WDM MSA 合规 external laser source。[S8] | 光源是关键物料；high-volume 意向不是固定保供合同。 |
| 封装/ASIC | GUC、Alchip、ASE、TSMC 等生态或合作声明。[S9][S10] | CPO 需要客户 package 共设计；伙伴不自动是购买方。 |
| 系统/机架 | Wiwynn 联合 reference architecture。[S11] | 证明 rack 集成方向，非已出货的 Ayar 网络产品。 |

## 三、横向分析：它争的是封装附近的 scale-up I/O，不是所有光互连

当前市场是竞品充分的场景。Ayar 面临的不是一家简单对手，而是四类替代：GPU/交换芯片原有电 SerDes + 铜缆、可插拔光模块、其他 CPO/硅光厂商，以及系统层扩展架构。下面比较的是客户购买理由和风险分配，而非未公开的统一性能排名。

| 路线 | 代表/抽象 | 客户为什么买 | 相对 Ayar 的关键不同 |
|---|---|---|---|
| 电互连与专有 scale-up | NVLink、Infinity Fabric、铜缆/背板 | 成熟、可维护、既有软件与供应链 | 距离、带宽密度和功耗逐代受限，但导入风险低。 |
| 可插拔光学/光模块 | 数据中心光收发器生态 | 模块化、可替换、运营成熟 | 光电转换离 compute package 更远，可能难以解除 XPU 短距 I/O 瓶颈。 |
| CPO/硅光替代 | Broadcom、Cisco、NVIDIA/Marvell 等相关方案和供应链 | 提高交换/XPU 端口带宽密度与能效 | Ayar 的差异是 UCIe optical chiplet + external light source，但行业未公开证明其全面胜出。 |
| 系统网络方案 | Ethernet/InfiniBand/UALink 等 | 跨节点拓扑、路由、拥塞、软件和 SLA | Ayar 提供物理 I/O building block，不提供完整网络控制平面。 |

### 1. 铜与 GPU 互连：真正的基准是「客户是否需要重新做封装」

铜、电 SerDes 和既有 GPU interconnect 的优势是产品化成熟、可替换部件、软件和规模化服务。即使在某一距离上功耗较高，客户仍可能选择它，因为把 TeraPHY 放进 XPU package 需要重新处理封装、热、测试、光纤和故障模型。Ayar 所称突破点来自大模型使 I/O bandwidth、reach 和 power wall 提前成为约束；若客户的机架规模或模型并行并未触碰此边界，CPO 的额外工程代价没有必要。[S1][S6]

这解释 Ayar 的客户不应是普通服务器买家，而是设计下一代 XPU、switch 或 rack-scale AI fabric 的厂商。它卖的不是「一根更快线缆」，而是一次数年的架构/供应链决策。

### 2. 可插拔光学：最现实的替代，不是过时技术

可插拔模块的核心优势是故障域和维护性：光学器件可在前面板或可及位置更换，标准化测试和供货关系成熟。Ayar 通过 SuperNova 的 external, field-replaceable light source 和 detachable fiber 试图把部分可维护性找回来。[S1][S13] 但 TeraPHY 本身在 package/board 侧，仍使封装内故障、光耦合、热管理与返修成为系统问题。

因此，CPO 并非在所有场景战胜可插拔光学。它的适用点是 I/O 必须贴近 XPU/交换芯片、铜已成首要瓶颈且客户愿意共同设计的高带宽 scale-up；在标准网络端口、频繁替换和成本敏感场景，模块化光学可能仍优。

### 3. 其他 CPO/硅光厂商：生态胜过单一器件参数

Broadcom、Cisco、Marvell、NVIDIA 及多家硅光/光引擎供应商可从交换机、DSP、可插拔、封装或自研光学切入。Ayar 的相对特色是独立 optical chiplet、UCIe 入口和 SuperNova 外置光源；其生态中有 GF、Lumentum、GUC、Alchip、Wiwynn，也有 AMD/NVIDIA/MediaTek 等投资者或生态方。[S4][S8][S10][S11]

但这也是 CPO 最难的竞争：客户未必购买独立 chiplet，可能选择 ASIC 厂/封装厂集成的一体方案。最终壁垒不是 8Tbps 宣传页，而是设计 win、yield、可靠性、可测试性、供应链议价和每代 XPU 的准时导入。公开资料不足以证明 Ayar 已经赢得哪一个 hyperscale volume design。

### 4. 用户视角与生态位

对 hyperscaler/ASIC 客户，Ayar 的吸引力是以 optical I/O 延长 scale-up 域、让多个机架的加速器更像一台逻辑机器，并降低 I/O power。对于机器人公司，光 I/O 是远离终端产品的上游基础设施选项：只有当训练/推理集群极大、网络成为核心成本且公司能影响服务器/ASIC 设计时，才可能直接创造价值。

用户真正要验证的是设计周期与可靠性，不是单一 benchmark：一个 optical engine 是否通过客户的 package 资格认证、外置光源的冗余/现场维护是否可行、光纤管理是否损伤服务器可服务性、cross-rack 拓扑/交换/拥塞是否由系统伙伴完整承担。Ayar 的公开合作已把这些问题带到桌面，但尚不足以替客户回答它们。[S10][S11]

## 四、横纵交汇：最强的证据是「进入封装链」，最大的风险也是「必须进入封装链」

### 1. 历史怎样塑造今天的位置

MIT/UC Berkeley/CU Boulder 的硅光成果和 GF 的早期制造协作，使 Ayar 形成了从光器件到 CMOS 制造的技术根基；Lumentum、CW-WDM MSA、UCIe、GUC 和 Wiwynn 则逐渐补上外置光源、接口、封装及机架层。[S7][S8][S9][S10][S11] 因而它能够在 AI I/O 变成痛点时，提出一个完整而非孤立器件的解决方案。

可这条路径也使商业化慢且重。若只卖一个光引擎，客户不会轻易改 package；若想保证系统可用，Ayar 又必须协调光源、连接器、OSAT、foundry、ASIC、server 和 rack。它不是「上线 SaaS 后看使用量」的增长曲线，而是随客户 silicon roadmap 呈阶梯式发生的深度设计赢单。

### 2. 优势和短板的同源性

| 表现 | 历史根源 | 优势 | 包袱/风险 |
|---|---|---|---|
| UCIe optical chiplet | 早期即以 package I/O 为边界 | 能融入异构 chiplet/XPU 架构 | 需与客户封装、IO die 和标准节奏同步。 |
| SuperNova 外置光源 | 光源热与可维护性问题被显式产品化 | 可把 laser 从热区移出并提高服务性 | 多一个关键物料、光纤与可靠性接口。 |
| 多方投资/合作 | 从 GF/Lumentum 延伸至 AMD/NVIDIA/GUC/Wiwynn | 更有机会打通供应链 | 投资/合作不等于设计 win，且生态多方利益未必一致。 |
| 大额 Series E | AI interconnect 市场预期上升 | 支撑产线、测试与全球团队 | 若量产导入延后，资本开支和估值压力会迅速显现。 |

### 3. 三种情景及触发器

**基准情景。**Series E 支撑量产测试能力，Ayar 在一到两个定制 ASIC/机架项目中完成 qualification 并形成早期规模收入；Wiwynn/GUC/NVLink Fusion 提供设计入口，但大多数 CPO 项目仍处于下一代 XPU 规划。观察触发器：已命名客户的量产系统、重复采购、单位/端口产能、可靠性资格和外置光源供给。[S4][S9][S10][S11]

**危险情景。**电 SerDes、铜缆和可插拔光学持续升级，客户因 CPO 的热、返修、测试与供应风险推迟导入；某一客户 ASIC 延期即推迟 Ayar 的大额收入，而光源/封装良率又压缩毛利。触发器：量产宣传继续多于订单、伙伴合作反复延期、资本用于维持工程而无客户转换、关键元件供给集中。

**乐观情景。**多机架 scale-up 成为推理/训练的刚性需求，UCIe 和 CPO 接口在 XPU/ASIC 中标准化；Ayar 以 TeraPHY + SuperNova 获得多个客户设计 win，Wiwynn 等 ODM 将参考架构变成可服务的 rack SKU，NVLink Fusion 生态使其能参与异构 AI factory。实现前提是：在真实系统中证明功耗/TCO、可维护性和 yield，而不是只证明器件链路。

## 五、人形机器人公司的投资、并购、采购和自研建议

| 动作 | 当前结论 | 原因 | 触发条件 |
|---|---|---|---|
| 直接投资 | **观察，不作优先布局** | 技术重要但商业化、客户和收入不透明；37.5 亿美元估值已含高度量产预期。[S4] | 获得多个可核验量产 design win、收入/毛利、供应与价格资料后再估。 |
| 并购 | **不建议** | CPO 价值来自与 foundry、光源、封装、ASIC、ODM 的外部生态共同形成，非买入独立 IP 即可复制；估值/资本结构也不匹配。 | 无当前触发条件。 |
| 采购/合作 | **不直接采购；通过服务器/网络供应商观察** | Ayar 不销售机器人端模组或现成网络 SLA；产品需进入自定义 XPU/机架设计。 | 自建超大 GPU 集群且服务器/ASIC 伙伴明确提供 Ayar CPO SKU 时评估。 |
| 自研 | **自研集群拓扑/通信与可观测性，不自研 CPO** | 机器人公司可优化训练通信、数据并行和推理编排；硅光/光源/封装自研时间和资本远超需求。 | 若未来成为定制 XPU/ASIC 买方，再做 CPO architecture co-design。 |

### P0/P1 验证清单

**P0（未来采购可行性）：**确认当前与规划 GPU/XPU、服务器 ODM、交换芯片、机柜和网络的接口；在统一模型、GPU 数量、拓扑和功耗预算下测 all-reduce、MoE/专家路由、推理 KV 迁移和故障恢复；要求供应商给出 optical engine、外置光源、光纤与冷却的可服务性、备件、MTBF、RMA、交期、出口和数据中心安全责任。

**P1（投资判断）：**取得 Ayar 的已量产/已资格认证/评估/共同开发各客户定义及金额；按 TeraPHY、SuperNova、封装测试和系统服务拆解 BOM、良率、产能、单价和毛利；核验 GF/TSMC、Lumentum/其他光源、OSAT、连接器和 Wiwynn/GUC 关系是否有最低采购或备供；查验 UCIe/OCI-MSA/CW-WDM MSA 的版本、互操作测试与客户限制。

## 六、融资史和合作网络（分层记录）

### 融资/资本史

| 时间 | 事件 | 金额/口径 | 解释 |
|---|---|---:|---|
| 2015–2021 | 早期融资 | 金额未由本次一手资料完整披露 | 公司已成立、GF 等为早期合作/投资方；不按数据库估算填补。 |
| 2022-04 | Series C | 1.30 亿美元 | Boardman Bay 领投；HPE、NVIDIA 等新增战略投资。公司未在公告中给出可与后续完全对账的当时累计。[S3] |
| 2024-12 | Series D | 1.55 亿美元；累计 3.70 亿美元；估值逾 10 亿美元 | Advent/Light Street 领投，面向高产量制造准备。[S6] |
| 2026-03 | Series E | 5.00 亿美元；累计 8.70 亿美元；估值 37.5 亿美元 | Neuberger Berman 领投，用于 high-volume production/test、全球扩张和生态。[S4] |

早期轮次和累计金额存在公开口径断层：2024 的 3.70 亿美元加 2026 的 5 亿美元等于 8.70 亿美元，但 2022 Series C 之前的逐轮金额没有在所用一手来源完整列出。报告不以第三方数据库的推测轮次强行补齐；尽调应索取 cap table、各优先股条款、已到位现金与二级交易信息。

### 投资方/股东

公开战略/财务投资者包括 AMD Ventures、NVIDIA、Intel Capital、HPE/Pathfinder、Applied Ventures、GlobalFoundries、Lockheed Martin Ventures、3M Ventures、Alchip、MediaTek、VentureTech Alliance、Boardman Bay、Advent Global Opportunities、Light Street、Neuberger Berman、ARK Invest、Insight Partners、QIA、Sequoia Global Equities、1789 Capital、Playground Global 等。[S3][S4][S6] 这是公开投资方和参与轮次名单，不是最新持股表；股权比例、清算优先权、董事席位、期权池、员工二级交易与核心 IP 权利未公开。

### 客户/订单

公司称 2022 已有 under-contract volume commercial shipments、预期数千 units，并在 2026 说 multiple generations shipped/thousands of optical engines deployed。[S3][S5] 但未公布客户名、订单量、合同金额、收入或复购。AMD、NVIDIA、HPE、GUC、Wiwynn、Alchip 和 MediaTek 出现为投资者、生态/共同设计或系统伙伴时，不能自动改写为「客户/订单」。本项无可审计的具体订单表，正是投资尽调的关键空白。

### 产业/供应链合作

| 关系 | 已确认内容 | 不可推导内容 |
|---|---|---|
| GlobalFoundries | 共同开发/制造硅光；2017 以 GF 45nm CMOS 进入合作。[S7] | 未披露 2026 实际产能、价格或独家关系。 |
| Lumentum | 提供/共同开发 CW-WDM MSA 外置激光源、目标 high volume。[S8] | 不是已披露的最低供货量或唯一光源。 |
| GUC | 将 TeraPHY 纳入先进 ASIC/封装 workflow 的联合参考设计。[S10] | 不是某一 hyperscaler 已量产 XPU。 |
| Wiwynn | 把 CPO 整合入 rack-level 架构，私密预览 reference design。[S11] | 不等于已售 1,024-GPU 机架。 |
| NVIDIA NVLink Fusion | Ayar 加入生态，做 optical/electrical compatibility。[S9] | 不等于 NVIDIA GPU/交换 SKU 已使用。 |

### 技术/高校网络

技术来源为 MIT、UC Berkeley、CU Boulder 的硅光研究及 DARPA 支持；现任 CEO Mark Wade 与 CTO Vladimir Stojanovic 是从早期光处理器成果延续下来的共同创始人。[S5][S12] 后续生态还包括 UCIe、CW-WDM MSA、OCI-MSA 等行业接口工作。[S1][S8] 这证明公司研究渊源与标准参与，不能推导高校拥有产品 IP、提供订单或对商业性能背书。

## 七、冲突、未确认事项与证据审计

| 议题 | 支持证据 | 限制/反证 | 当前结论/下一步 |
|---|---|---|---|
| 商业/量产状态 | 2022 contract volume shipment；2026 multiple generations、thousands deployed。[S3][S5] | 无收入、客户、单位、良率和持续订单披露。 | 已有商业交付证据；规模量产与收入质量待核。 |
| TeraPHY 规格 | 官方产品页给出 8Tbps、延迟、BER、UCIe。[S2] | 页面明确 preliminary；NDA 下细节未公开。 | 用作技术路线，不作最终采购规格。 |
| 性能/效率 | 产品页有 5–10x/10x/4–8x 等主张。[S1][S2] | 基线、系统配置、距离、协议和 TCO 细节不足。 | 仅作厂商主张，必须同条件复测。 |
| NVIDIA/AMD 关系 | 投资、生态、兼容与联合声明明确。[S4][S6][S9] | 无公开 design win、采购或量产 SKU。 | 记为战略生态，不记客户订单。 |
| Scale-out 网络资格 | TeraPHY 可跨机架/最远 2km；Wiwynn 有 rack 架构。[S1][S11] | Ayar 未公开提供 switch/router、拥塞控制、拓扑/SLA 或网络运营交付。 | 不能归为 1.6。 |

## 八、产业链分类复核（报告末尾结论）

**主分类：`1.5 Scale-up互联通信`，高置信。**Ayar 的核心交付物是嵌入 XPU/交换芯片封装附近的 TeraPHY 光 I/O 与 SuperNova 外置光源，客户购买带宽、延迟、功耗、reach 和可集成性；其 UCIe 接口和 CPO 参考设计的直接目的，是扩大加速器/ASIC 的 scale-up 域。产品不是光计算、GPU 或网络管理软件。[S1][S2][S13]

**不设正式次分类 `1.6 Scale-out互联通信`。**尽管 TeraPHY 可支持跨机架、跨更远距离连接，且 Wiwynn 合作描绘了多机架架构，但分类规则要求核心交付物包含完整交换/路由、拥塞控制、拓扑、SLA 和客户交付证据。Ayar 当前提供的是物理层/封装内光 I/O building block 和参考架构，未见其独立交付上述网络能力。[S11][S14]

**不设正式次分类 `1.9 光子/光电计算芯片`。**其硅光器件用于通信和数据搬运，不执行光学矩阵计算；客户购买的是网络连接能力，不能因产品含 photonics 就进入 1.9。[S1][S2][S14]

**不设正式次分类 `3.1 光通信`。**Ayar 依赖并参与光源/光纤通信生态，但当前价值创造和客户购买理由集中在封装级 AI scale-up I/O，而非独立电信光模块、传输设备或运营网络。若未来形成独立、可外售的光通信系统产品及对应收入证据，再复核。

## 信息来源与来源审计

| 编号 | 来源 | 等级 | 用途 | 访问日 |
|---|---|---|---|---|
| S1 | [Ayar 完整 CPO 解决方案与 TeraPHY/SuperNova 产品页](https://ayarlabs.com/products/) | L1 公司一手 | 产品定位、CPO 方案、相对性能主张、系统边界 | 2026-08-11 |
| S2 | [TeraPHY optical I/O chiplet 产品页](https://ayarlabs.com/products/teraphy/) | L1 公司一手 | 8Tbps、UCIe、port、延迟、BER 与 preliminary 限制 | 2026-08-11 |
| S3 | [2022 Series C 与首批 volume shipments](https://ayarlabs.com/news/ayar-labs-raises-130-million-in-series-c-funding/) | L1 公司一手 | 1.3 亿美元、客户发货、供给与量产计划 | 2026-08-11 |
| S4 | [2026 Series E 5 亿美元融资公告](https://ayarlabs.com/news/ayar-labs-closes-500m-series-e-accelerates-volume-production-of-co-packaged-optics/) | L1 公司一手 | 融资、估值、累计资金、扩产用途与投资人 | 2026-08-11 |
| S5 | [公司 About/时间线](https://ayarlabs.com/company/about/) | L1 公司一手 | 成立、研究源头、产品和多代出货主张、2023–2026 里程碑 | 2026-08-11 |
| S6 | [2024 Series D 1.55 亿美元融资公告](https://ayarlabs.com/news/ayar-labs-155m-series-d-to-address-ai-infrastructure-includes-amd-intel-capital-nvidia/) | L1 公司一手 | Series D、战略投资者、累计融资与量产准备 | 2026-08-11 |
| S7 | [2017 GlobalFoundries 战略合作](https://ayarlabs.com/news/globalfoundries-and-ayar-labs-establish-strategic-collaboration-to-speed-up-data-center-applications/) | L1 公司一手 | GF 制造、技术源头和早期性能目标 | 2026-08-11 |
| S8 | [Lumentum 外置光源战略合作](https://ayarlabs.com/news/lumentum-and-ayar-labs-announce-strategic-collaboration-to-supply-external-light-sources-for-co-packaged-optical-interconnect-solutions/) | L1 公司一手 | CW-WDM、光源供应链与 high-volume 意向 | 2026-08-11 |
| S9 | [加入 NVIDIA NVLink Fusion 生态](https://ayarlabs.com/news/ayar-labs-joins-nvidia-nvlink-fusion-ecosystem-to-bring-co-packaged-optics-to-rack-scale-ai-infrastructure/) | L1 公司一手 | 兼容、生态而非采购关系 | 2026-08-11 |
| S10 | [GUC 与 Ayar CPO/ASIC 合作](https://ayarlabs.com/news/guc-and-ayar-labs-partner-to-advance-co-packaged-optics-for-hyperscalers/) | L1 公司一手 | 参考封装、100Tbps 目标、合作边界 | 2026-08-11 |
| S11 | [Wiwynn 与 Ayar rack-scale 合作](https://ayarlabs.com/news/ayar-labs-and-wiwynn-partner-to-bring-co-packaged-optics-to-rack-scale-ai-systems/) | L1 公司一手 | 机架参考设计、1,024 accelerator 目标与私密预览 | 2026-08-11 |
| S12 | [Ayar 管理团队](https://ayarlabs.com/company/leadership/) | L1 公司一手 | 创始人/管理层背景 | 2026-08-11 |
| S13 | [SuperNova light source 产品页](https://ayarlabs.com/products/supernova/) | L1 公司一手 | 光源架构、CW-WDM、16Tbps 和可维护性 | 2026-08-11 |
| S14 | [产业链分类规则](../产业链分类规则.md) | L1 本库规则 | 1.5、1.6、1.9、3.1 的分类边界 | 2026-08-11 |

## 方法论说明

本文按横纵分析法重建 Ayar Labs 从学术硅光、foundry/光源链、光 I/O chiplet 到 CPO 机架生态的历程，并以铜互连、可插拔光学、其他 CPO 和完整网络方案作横向参照。所有融资、发货、合作、性能和量产用语均按一手来源分层；没有客户订单、收入、良率、SLA 和网络控制平面证据的地方，明确保留为待验证项。
