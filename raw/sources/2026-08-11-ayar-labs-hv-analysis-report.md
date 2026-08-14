# Ayar Labs 横纵分析报告：把光纤推进封装，仍不等于卖出一张网络

> Source: 本地报告 `横纵研究报告/AyarLabs_横纵分析报告.md`
> Collected: 2026-08-11
> Published: Unknown

## 原始报告关键原文

> 研究对象：Ayar Labs, Inc.（简称 Ayar Labs）  
> 研究截止日：2026-08-11｜公司类型：共封装光学（CPO）与光 I/O chiplet 公司  
> 证据口径：优先公司一手公告、产品规格与合作方材料；「生产就绪」「客户」「性能」均保留公司披露属性。

**一句话定义。**Ayar Labs 是把硅光光引擎 TeraPHY™ 与外置多波长光源 SuperNova™ 做成可经 UCIe 集成到 XPU/交换芯片封装内的共封装光学（CPO）方案，试图替换 AI scale-up 架构中限制带宽、距离和功耗的短距铜互连。[S1][S2]

它的价值不在于计算，而在于**让计算芯片之间更高带宽、更远距离、更低功耗地移动数据**。TeraPHY 是光 I/O chiplet，不是 GPU、NPU 或光学矩阵计算芯片；SuperNova 是给光引擎供光的外置激光源，也不是面向电信运营商销售的传统收发模块。产品页面列出 TeraPHY 最高 8Tbps 双向带宽、10ns/chiplet 延迟（不含光纤飞行时间）、BER <1e-12、毫米到公里的连接范围，并明确写明规格为 preliminary、可能改变。[S2]

1. **可验证的交付层级正在上升，但独立收入和客户订单不透明。**公司 2022 年称首次按合同进行 volume commercial shipments、预计年底出货数千个 in-package optical interconnect；2026 年称已出货多代 TeraPHY、部署数千个 optical engine，并以 5 亿美元 Series E 扩大高产量生产和测试能力。[S3][S4][S5] 三种说法可证明持续产品化，不能证明 2026 年的营收、毛利、每客户部署量、返修率或某个 hyperscaler 的已签采购额。
2. **最新融资强，但融资不是订单。**2026 年 3 月 Series E 为 5 亿美元、投后估值 37.5 亿美元、累计资金 8.7 亿美元；2024 年 Series D 为 1.55 亿美元、当时累计 3.7 亿美元、估值逾 10 亿美元。[S4][S6] 这些数字说明资本可支撑产线、测试与生态建设，不能将其当成销售额或量产良率的替代。
3. **合作是其护城河，也是商业化门槛。**公司与 GlobalFoundries、Lumentum、GUC、Wiwynn、NVIDIA NVLink Fusion、Alchip/MediaTek 等形成从硅光、外置光源、先进封装、ASIC 到机架的链条。[S7][S8][S9][S10][S11] 但公开材料主要是共同设计、兼容、参考架构、生态加入或私密预览；没有披露可归因于 Ayar 的量产订单、交换机/路由交付和网络 SLA。

2025 年 3 月，Ayar 发布其称为世界首个 8Tbps UCIe optical chiplet 的产品，展示把光 I/O 以 UCIe 标准接入 AI scale-up 架构的路径。TeraPHY 页面列出 8 个全双工 optical port、每 port 16 个 WDM transceiver slice、UCIe electrical interface 和可配置 crossbar，同时标注规格为 preliminary、细节在 NDA 下提供。[S2][S9]

同年与 GUC 的合作更接近可制造系统：双方探索把 TeraPHY 集成到 GUC 的先进 ASIC/封装流程，提出一个 XPU 多芯片封装参考设计，声称可以提供超过 100Tbps full-duplex 光接口，并处理 UCIe、信号/供电完整性、热、stiffener、可拆光纤及 warpage 等问题。[S10] 但公告措辞是「exploring」「future customers」，所以这是**参考设计和联合工程**，不是某 hyperscaler 的量产订单。

2026 年 3 月，Ayar 完成 5 亿美元 Series E，Neuberger Berman 领投；新投资者包括 Alchip、ARK Invest、Insight Partners、MediaTek、QIA、Sequoia Global Equities、1789 Capital，AMD、NVIDIA 等也参与。公司称总融资 8.7 亿美元、估值 37.5 亿美元，并计划扩展 high-volume production/test capacity、全球业务和新竹办公室。[S4]

3 月，Ayar 与 Wiwynn 合作开发光连接的 rack-scale AI 系统，宣称目标架构可扩至 1,024 个 AI accelerator 以上、每 accelerator 超过 100Tbps optical connectivity，并在 OFC 对选定客户/媒体/分析师进行私人预览。[S11] 这些数值是联合参考架构目标，不能表述为已交付机架或公开客户部署。

6 月，公司加入 NVIDIA NVLink Fusion 生态，宣布产品将与 NVIDIA optical/SerDes 技术进行光电兼容，以使 hyperscaler 和系统创新者能在 NVLink Fusion 周围构建 CPO 架构。[S9] 加入生态、兼容和共同面向客户极具战略价值，却不等同于 NVIDIA SKU 内已经采用 TeraPHY，更不等同于 NVIDIA 或其云客户有不可取消采购承诺。

**对人形机器人公司的动作结论：**不建议当前直接投资、并购或采购。机器人公司近期的算力问题多发生在车/机体内、边缘设备、训练 GPU 集群和云推理服务中；Ayar 的核心产品面向 hyperscale AI scale-up 封装与机架，购买决策者是定制 XPU/交换 ASIC、服务器 ODM、系统厂商或云厂商，不是机器人 OEM。若公司未来自建数千 GPU 以上、明确受制于跨机架 scale-up bandwidth/power，才应通过服务器/ASIC/网络伙伴进行技术尽调；在此之前，追踪即可。

**主分类：`1.5 Scale-up互联通信`，高置信。**Ayar 的核心交付物是嵌入 XPU/交换芯片封装附近的 TeraPHY 光 I/O 与 SuperNova 外置光源，客户购买带宽、延迟、功耗、reach 和可集成性；其 UCIe 接口和 CPO 参考设计的直接目的，是扩大加速器/ASIC 的 scale-up 域。产品不是光计算、GPU 或网络管理软件。[S1][S2][S13]

**不设正式次分类 `1.6 Scale-out互联通信`。**尽管 TeraPHY 可支持跨机架、跨更远距离连接，且 Wiwynn 合作描绘了多机架架构，但分类规则要求核心交付物包含完整交换/路由、拥塞控制、拓扑、SLA 和客户交付证据。Ayar 当前提供的是物理层/封装内光 I/O building block 和参考架构，未见其独立交付上述网络能力。[S11][S14]

**不设正式次分类 `1.9 光子/光电计算芯片`。**其硅光器件用于通信和数据搬运，不执行光学矩阵计算；客户购买的是网络连接能力，不能因产品含 photonics 就进入 1.9。[S1][S2][S14]

**不设正式次分类 `3.1 光通信`。**Ayar 依赖并参与光源/光纤通信生态，但当前价值创造和客户购买理由集中在封装级 AI scale-up I/O，而非独立电信光模块、传输设备或运营网络。若未来形成独立、可外售的光通信系统产品及对应收入证据，再复核。
