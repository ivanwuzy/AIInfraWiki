# Groq 横纵分析报告

> 研究对象：Groq LLC（简称 Groq）  
> 研究截止日：2026-08-11（Asia/Shanghai）｜对象类型：AI 推理芯片与推理云基础设施公司  
> 研究目的：为人形机器人公司的推理采购、战略合作、投资/并购和自研边界提供可证伪判断。  
> 证据口径：本文把公司新闻稿、合作方公告、独立基准和媒体报道严格分开；没有公开审计报表、合同金额或复现实测的事项不写成既成商业事实。

## 目录

1. 一句话定义与结论先行
2. 纵向分析：从 TPU 团队分拆到“推理云”
3. 横向分析：专用低延迟路线与 GPU 云的正面碰撞
4. 横纵交汇：历史选择怎样塑造现在的护城河与软肋
5. 面向人形机器人公司的行动建议
6. 融资历史、合作网络与证据台账
7. 冲突与未确认事项
8. 产业链分类复核
9. 信息来源与方法论说明

## 一句话定义与结论先行

**Groq 是一家把“编译器事先排好每一次数据移动”做成 LPU（Language Processing Unit）芯片、再把芯片做成 GroqCloud 推理服务的公司；它卖的不是通用训练算力，而是特定开放模型在线生成时的低首 token 延迟、稳定 token 流和按 token 交付能力。** [S4][S5]

截至研究截止日，Groq 已不应只被视为一家芯片创业公司：其公开叙事和交付入口已转成全球推理云。公司称 2026 年 6 月已在北美、欧洲、中东和亚太运营 13 个数据中心、服务超过 500 万开发者，并计划 2027 年底达到 200MW；这些是**公司披露的运营指标与规划，不是独立审计结果**。[S15] 2025 年末，Groq 将其推理技术以非独占方式许可给 NVIDIA，创始人 Jonathan Ross、总裁 Sunny Madra 等人加入 NVIDIA，Groq 本身继续独立运营。这件事使“买下 Groq 的芯片团队”不再是合理的并购假设，也使技术权利、人员留存和下一代产品归属成为一切投资判断的前置尽调。[S13]

本报告的阶段性结论如下。

| 问题 | 判断 | 置信度与边界 |
|---|---|---|
| 是否值得作为通用 GPU 的替代品？ | 否。它是**特定低延迟推理工作负载的补充**，不是训练、频繁改模型或任意多模态/VLA 部署的通用替代。 | 高；Groq 公开定位就是推理，且可见开发者入口是模型 API。[S4][S17] |
| 是否值得合作/采购？ | 值得进入有退出条件的 POC：语音交互、云端语言规划、客服/运维 Agent、批量文本处理中的固定模型与实时链路。 | 中；需在相同模型、精度、上下文和并发下验证 p50/p99、成本、可用性和数据驻留。 |
| 是否建议财务投资？ | **观察、非优先。** 只有在 NVIDIA 许可后的 IP 边界、实际合同/续费、单位经济性和控制权清楚后，才讨论小比例战略投资。 | 中低；2026 年新增融资已发生，但估值和条款未公开。[S15] |
| 是否建议并购？ | **不建议发起整体并购。** 体量、非独占许可和核心创始技术团队转入 NVIDIA 显著抬高交易与整合不确定性。 | 中高；并非说绝无资产交易可能，而是公开证据不足以支持。 [S13] |
| 机器人自研芯片是否应仿制 LPU？ | 不建议。可自研的是可移植推理编排、量化、缓存和确定性 QoS；不要先做一颗“机器人版 Groq”。 | 判断；专用芯片需要软件、硅片、供给和规模化利用率同时成立。 |

这里有一个常被忽略的区别：低延迟并不自动等同于低总成本。机器人公司若把云端语言/多模态规划放到 GroqCloud，体验改善取决于模型 decode 之外的网络往返、排队、工具调用、视觉编码和安全回退；若把低层控制闭环放进云端，任何很快的 token 生成也无法消除物理网络的不确定性。因此，Groq 的自然位置是“云端认知层的候选推理后端”，不是本体实时控制芯片。

## 纵向分析：从 TPU 团队分拆到“推理云”

### 阶段一：先有计算哲学，后有产品（2016—2018）

Groq 于 2016 年成立。Jonathan Ross 曾在 Google 参与 TPU；早期公开报道还显示，联合创始人 Douglas Wightman 同样来自 Google。这个出身解释了它最初并没有沿着“再造一张 GPU 卡”的方向走：团队从一开始就把神经网络算子、编译器映射和专用硅片视为一个系统问题。[S1][S3]

早期资本也反映出这是一场长周期押注。TechCrunch 根据 SEC 文件报道，Social Capital 2017 年 4 月投资 1,000 万美元；2018 年 9 月，Groq 在一笔目标 6,000 万美元的融资中已募集 5,230 万美元，Social Capital 参与，另有未披露投资人。[S1] 当时公司几乎没有对外产品材料。它融资的不是一个已经验证的云服务，而是“把专用张量处理器做成下一代计算基础构件”的团队与假设。

这段历史形成了 Groq 后来最有价值、也最难复制的选择：**软件先行**。其后公开的架构说明称，团队在确定第一代 GroqChip 的芯片设计前，先设计了编译器；编译器将来自多个框架的工作负载映射、调度到一颗或多颗 LPU，并在生成程序时写入完整的数据移动计划。[S4] 这不是普通的“有个编译器”——它放弃了 GPU 为广泛动态工作负载准备的许多运行时自由度，以换取可预测执行。

### 阶段二：把静态数据流做成可编程硅片（2019—2021）

Groq 将路线称为 Tensor Streaming Processor，后来商业化命名为 LPU。其关键不是“语言”这个营销名称，而是四个工程承诺：软件优先、可编程流水线、确定性计算与网络、片上内存。[S4]

具体而言，编译器提前决定每一个函数单元何时取数、做什么、把结果放到哪里；片内 SIMD 单元之间以类似“传送带”的方式传递数据和指令。公司称这减少同步、缓存未命中、动态仲裁和跨芯片路由控制带来的不确定性，并使同一流水线可延伸到多颗芯片。[S4] 对 autoregressive LLM 的 decode 来说，这一逻辑很有吸引力：用户感知的是下一个 token 何时到来，随机抖动比峰值 FLOPS 更损害对话、语音和交互式 Agent。

代价也在同一个设计中埋下。静态排程最喜欢确定的计算图和可预计的数据形状；现实服务则包含变长上下文、动态 batch、多租户资源竞争、MoE 路由、工具调用和持续变化的模型算子。Groq 不是没有应对这些问题——其 2025 年材料称 RealScale 互连和编译器可将多颗 LPU 组成共享资源 fabric，并支持大模型及 MoE——但这是公司自己的技术陈述，不能替代在混合生产流量下的第三方 p99、编译时长、重试率和功耗测试。[S22]

2021 年，Groq 完成 3 亿美元融资；后续报道将其称为 Series C。融资金额有多个媒体来源交叉印证，本文按“3 亿美元”记录，不臆测未公开的估值、优先权与清算条款。[S2][S3] 这轮钱的战略意义是让公司有能力从单芯片/板卡验证走向系统化交付；但公开材料不足以把它直接等同于可观收入或大规模出货。

### 阶段三：生成式 AI 改写了产品入口（2023—2024）

大模型热潮给了 Groq 一个极少见的产品化窗口。训练市场已高度围绕 GPU、CUDA、网络和存储构建，替换训练平台往往要承担巨大的迁移风险；而大量企业第一次要把开放模型接进在线产品，推理后端仍是可选项。Groq 把原来偏硬件的 LPU Inference Engine 改造成 GroqCloud 和 API，用户不必采购机器就能先购买 token 服务。[S5][S6]

2024 年 2 月，Artificial Analysis 的公开测试被 Groq 用作第三方背书：在当时设置下，Llama 2-70B API 测得 241 tokens/s，约 100 个输出 token 的总响应时间为 0.8 秒。请注意，它证明的是**某时点、某模型、约 100-token 输入和约 200-token 输出的 live API 测试**，不是“所有模型快十倍”的总论断；后者是公司宣传口径。[S5] 这也是看 Groq 的正确方式：它的可感知优势首先是 token 流的速度与一致性，而不是用一个孤立的 TOPS 数字覆盖全部部署成本。

同年 3 月，Groq 宣布收购分析服务公司 Definitive Intelligence，以建立 GroqCloud 业务单元；金额未披露。该动作说明管理层已经意识到，卖芯片不够，模型托管、API、开发者体验、计费与容量运营才是把架构优势转成复购的产品层。[S6] 8 月，Series D 融资 6.4 亿美元、投后估值 28 亿美元；报道列出 BlackRock 领投，Neuberger Berman、Type One Ventures、Cisco Investments、KDDI Open Innovation Fund III、Samsung Catalyst Fund 等参投，并称累计融资超过 10 亿美元。[S3] “超过 10 亿美元”是媒体报道的累计口径，不能理解为公司现金余额。

### 阶段四：从单一 API 到主权/区域推理容量（2024 下半年—2025）

Saudi Arabia 是 Groq 由云 API 走向基础设施交付的关键拐点。2024 年 9 月，Groq 与 Aramco Digital 公告称双方将建设沙特大型推理数据中心，目标是 2024 年底处理数十亿 token/日、2025 年达数千亿 token/日；这些均是项目目标，不是已经实现的吞吐。[S8] 2025 年 2 月，Groq 又称获得沙特 15 亿美元的基础设施交付承诺，且 Dammam 数据中心已通过 GroqCloud 对全球客户服务；公告没有披露这笔“commitment”是预付款、最低采购额、分期部署合同还是收入确认，因此不得把 15 亿美元写成已实现订单收入。[S9]

区域化部署解决的不只是带宽。对政府、金融和机器人车队运营者，数据在哪、谁控制推理能力、故障时能否切换，往往与 token 单价同等重要。2025 年 5 月，Bell Canada 选择 Groq 作为 Bell AI Fabric 的独家推理供应商，公告说其加拿大网络覆盖六个站点、目标 500MW，首个 7MW Kamloops 设施计划于 6 月上线；后两个数字属于 Bell 项目规划和首期公告，需在验收和实际负载数据中再核实。[S11] 同月，Groq 还称全球网络容量超过每秒 2,000 万 tokens。[S11]

这年公司同时把开发者口碑变为可观察的产品动作。它称 GroqCloud 上线满一年时已有 100 万开发者、数千付费客户和 22,000+ Discord 社群成员；这些是公司统计，较能证明“有分发入口”，仍不能证明留存或净收入留存。[S7] 公开的 API cookbook 和 Python SDK 至少让外部人能复现接入路径：前者有 quickstart、工具调用、RAG、批处理和 MCP 示例，后者支持同步及异步 REST 客户端。[S16][S17] 对开发者而言，Groq 的卖点因此不只是快，而是先用 OpenAI 风格的调用方式试起来；Meta 合作公告声称迁移只需三行代码，仍应由每个生产应用自行验证兼容性、速率限制和模型功能。[S10]

2025 年还出现了三类商业网络。一是 Meta：Groq 为官方 Llama API 提供快速推理预览，公告称可提供最高 625 tokens/s 的速度，属于合作方共同宣传，不能外推至全部 Llama 模型或客户负载。[S10] 二是 Equinix：Helsinki 的欧洲部署和后续 Sydney 部署，将靠近用户、互连和数据治理变成产品的一部分；Sydney 公告还点名 Canva 为正在合作的客户，但没有披露合同规模或使用量。[S12][S23] 三是主权与行业客户：HUMAIN、Paytm、美国能源部等分别对应沙特企业 AI、印度金融平台和探索性科研合作。尤其 DOE 是 MOU/信息共享框架，绝不应列作采购订单。[S24][S25]

### 阶段五：NVIDIA 许可后，Groq 的公司性质发生变化（2025 年末—2026）

2025 年 12 月，Groq 公告与 NVIDIA 达成**非独占**推理技术许可协议，称双方目标是扩大高性能、低成本推理的可得性。创始人 Ross、总裁 Madra 和其他团队成员加入 NVIDIA；Groq 继续作为独立公司，由 Simon Edwards 出任 CEO，GroqCloud 不间断运营。[S13] 这不是公开确认的“收购 Groq”：公告没有披露许可费、专利范围、排他期、员工人数、哪些未来设计由谁控制，也没有披露是否包含芯片、编译器、系统或客户合同的权利。

因此，许可有两种相反含义。乐观读法是，NVIDIA 为技术价值和推理路线背书，Groq 可用生态/供应能力扩大云服务；危险读法是，原本最稀缺的架构与领导人才被最大竞争者部分吸收，独立 Groq 的长期差异化和议价能力变弱。这不是文字游戏，而是后续尽调必须拆开的资产归属问题。

2026 年 6 月，Groq 公告获 6.5 亿美元新增 growth capital，由 Disruptive 和 Infinitum 领投；公司称已运行 13 座数据中心、服务逾 500 万开发者、每周处理数万亿 token，并计划至 2027 年末接近 200MW。[S15] 公告还称 NVIDIA 的下一代 LPX 平台会采用 Groq 推理技术。上述均为公司披露。该轮没有公开估值、优先股条款、实际 MW、每 MW 资本开支或客户集中度，故不能因 6.5 亿美元而推导“云业务已经可持续盈利”。

## 横向分析：专用低延迟路线与 GPU 云的正面碰撞

### 竞争场景：Groq 实际在争夺什么

Groq 并不主要争夺“谁能训练最大模型”。它争夺的是模型已选定、请求以生成 token 为主、用户或 Agent 对响应节奏敏感时，谁能以可预期的延迟、足够高的吞吐和可接受的单位成本把服务交付出来。下面的比较把训练、模型选择、主权部署和开发者迁移成本一起放进去；不能只看厂商各自最优 benchmark。

| 路线/代表玩家 | 用户购买的核心东西 | 对 Groq 的压力 | Groq 的相对强项 | 采购时应避免的误判 |
|---|---|---|---|---|
| NVIDIA GPU + CUDA + TensorRT-LLM | 从训练到推理的通用软硬件、最广工具/集成商生态 | CUDA 已是团队与供应链的默认语言；能处理更多模型、训练、微调和动态工作负载。 | 若目标是固定开放模型实时 decode，LPU 可把调度/数据流专门化，API 接入门槛低。 | 不要把 Groq token/s 与 GPU 的整机利用率、KV cache、batch、网络和运维成本分别比较。 |
| Cerebras Inference | Wafer-Scale Engine + 推理服务，以大面积片上资源/带宽减少切分 | 同样是专用推理、同样有 API，且在极大模型和长上下文上提供另一种“少切分”的答案。 | Groq 的核心主张是确定性流水和多芯片编译映射，而非单颗超大晶圆。 | 不能以“都比 GPU 快”替代同模型、同上下文、同 SLA 的比测。 |
| AWS Inferentia + AWS 云栈 | 低成本推理芯片、Neuron 软件和 AWS 内部网络/服务整合 | 对已深度使用 AWS 的客户，身份、数据、网络、采购和托管模型的迁移成本很低。 | Groq 可用独立 API/区域容量进入多云或主权需求，强调实时 token 输出。 | 不能把 API 迁移简单等同为数据治理、VPC、审计和运维迁移。 |
| AMD Instinct + ROCm / 其他 GPU 云 | 第二 GPU 供应来源及更接近 CUDA 的开放软件路线 | 对需要训练+推理一体、模型频繁变化的团队，GPU 的可编程性与供应弹性更强。 | Groq 在专用模型的确定性低时延上并非必须与 GPU 做“全功能”竞争。 | 不要把有限模型菜单的 API 服务误写成通用 CUDA-like 平台。 |

表中 NVIDIA 的 TensorRT-LLM 是专门为优化 LLM 推理性能的开源库，说明 GPU 阵营并非用通用框架“裸跑”推理；AWS 公开定位 Inferentia 为其深度学习推理芯片；AMD 则持续将 ROCm 定位为其 GPU 的开放软件栈。[S18][S20][S21] 这三者构成 Groq 真正的替代集合：不是只比较芯片，而是比较“一个团队能否更快、更稳、更合规地把模型运营起来”。Cerebras 的推理产品和服务是专用架构的直接可比对象，但其路线、价格和规模也必须逐案核对。[S19]

### 1. NVIDIA：最难打败的不是芯片，而是既有工程组织

对训练团队而言，NVIDIA 的优势是连续性：同一供应商覆盖训练、后训练、推理和大量第三方软件。TensorRT-LLM 提供高性能 LLM 推理优化，CUDA 生态则承载工程师、框架、驱动、调试、监控和系统集成。[S18] 这使 GPU 的“性能不一定最专用”常被工程现实抵消：开发者不需要先改写模型和运维体系，也可在同一资源池内混合工作负载。

Groq 对这个默认选项的反击很聪明：不要让用户先购买机器，而是提供 API、SDK、cookbook、预置模型与 token 计费。对于一个只需运行指定 Llama/开源模型的实时应用，三行代码可迁移的承诺足以把 POC 阻力降到很低。[S10][S16][S17] 用户会选择 Groq，通常不是因为它在所有算子上更通用，而是因为产品经理能直接感到回复更快、更连续。

但生产级的真实问题更苛刻：模型是否完整支持 tool use、JSON mode、长上下文和 function calling？高峰时 p99 是否仍稳定？数据是否可留在指定地区？服务异常时能否降级到 GPU 后端？这些问题正是“模型 API”相对于自有 GPU 集群的控制权代价。Groq 的公开资料能证明有 SDK、示例和开发者社区，不能证明每一个企业都有无缝迁移经验。[S7][S16][S17]

### 2. Cerebras：两种专用化，争的是不同的系统瓶颈

Cerebras 的 Wafer-Scale 系统将很大面积的计算和片上资源放在同一系统中，并提供 Inference 服务。[S19] 它与 Groq 同样承认 GPU 的通用性会在推理任务中带来额外开销，但答案不同：Cerebras 试图以超大单体减少模型切分与外部内存/通信瓶颈；Groq 则以编译器预排的数据流水和确定性多芯片运行来处理问题。[S4][S19]

用户视角上，两者都适合“我不要自己管理 GPU，只想让大模型更快响应”的需求。区别会在长上下文、大模型、多并发和模型升级时浮现：Cerebras 的大晶圆资源与系统交付方式、Groq 的多 LPU 编译和 API 模型菜单各自有边界。没有统一、可复现、同价位的第三方 TCO 测试，不能裁决谁普遍更优。对机器人公司，这反而是好事：POC 应把二者都当作云端语言规划/语音的候选后端，而不是只在营销 benchmark 上选边站。

### 3. AWS Inferentia 与 AMD ROCm：云粘性和可编程性会吞掉纯速度优势

AWS Inferentia 的优势不在于制造“最快”的单点体验，而在于它嵌入 AWS 的资源、安全、网络、采购和托管服务。对已经把数据、身份、日志与模型部署放在 AWS 的公司，这种一体化常常比换一个更快 API 更重要。[S20] Groq 的机会则出现在多云、地区主权、对话/语音实时性或客户愿意将推理层单独采购的时候。

AMD ROCm 则代表另一条路径：保持 GPU 形态，但以软件栈争取训练和推理工作负载。[S21] 对人形机器人公司尤其重要，因为 VLA/VLM、仿真、训练、微调和视觉预处理会频繁改动；一套能跨多个阶段工作的 GPU 环境，即使某个 LLM decode 指标较慢，也可能更便宜、更容易调试。Groq 必须证明它带来的体验或成本收益足以覆盖“多一个后端”的复杂度。

### 开发者/用户视角：真实信号与不可见部分

可验证的正向信号有三项：Groq 的 Python SDK 可直接安装并包含同步/异步客户端；官方 cookbook 覆盖 RAG、批处理、MCP 和工具调用；2025 年官方还披露了 100 万开发者、数千付费客户和 22,000+ Discord 成员。[S7][S16][S17] 这至少说明开发者不是只能通过销售购买板卡。

可验证的负向信号同样重要：公开 API 文档和代码示例只能说明接入存在，不能说明大客户的高并发稳定性、模型升级速度、支持响应、合规审计或退出成本。Groq 2024 的独立 benchmark 也只覆盖当时的 Llama 2-70B 和特定请求形状。[S5] 因此本文不把 GitHub star、社群人数或厂商的“百万开发者”说成用户满意度，更不把公司宣称的“最低 token 成本”直接写成价格事实。

## 横纵交汇：历史选择怎样塑造现在的护城河与软肋

Groq 今日最鲜明的位置，是它早年做出的一个看似反直觉的决定：不把硬件当主语，而是先让编译器决定硬件如何执行。GPU 的强大来自对未知工作负载的包容；Groq 的强大则来自对已知工作负载不再临场发挥。前者适合一个不断改变的研究实验室，后者适合一个希望每个 token 都按时到达的生产服务。[S4]

这个选择解释了它在生成式 AI 爆发后为什么突然具备可见性。LLM 的 autoregressive 输出把用户体验压缩成“首 token”和“连续 token”两个感受，静态映射、确定性网络和片上数据流因此从硬件洁癖变成产品卖点。[S4][S5] 也解释了为何公司先后收购 Definitive Intelligence、做 GroqCloud、进入沙特与 Bell 的区域部署：如果不掌握 API、模型、容量和地点，优秀的芯片也只是别人机房中的一个部件。[S6][S8][S11]

但历史同样留下约束。Groq 的优化对象是推理，并非训练；其最强的公开证据集中在选定的开放 LLM API，而不是任意模型、任意精度、任意动态 workload。为了把计算图在编译期排好，团队必须持续跟上新模型结构、长上下文、稀疏/专家路由、工具链和服务调度的变化。公司的 2025 年 MoE 材料表明它知道这个挑战，但它仍是厂商材料。[S22] 当 AI 从“一个模型回答问题”演进为“多个模型、工具和机器人传感器共同运行”时，Groq 的静态优势必须在上层动态性中继续成立。

2025 年与 NVIDIA 的非独占许可是这条历史线最戏剧性的回环。Groq 早年正是由 TPU/专用计算思路出发，试图绕开 GPU 的一般性成本；今天它的一部分技术与领导者进入 GPU 霸主的体系。[S1][S13] 这可以被理解为路线被验证，也可被理解为独立硬件挑战者的终局压力。对于外部投资人，两个解释不能平均化：应把许可范围、未来 IP、人才留存、NVIDIA 的 LPX 产品实际采用和 GroqCloud 的独立毛利逐项拆开。

### 三个未来剧本

| 剧本 | 触发逻辑 | 对 Groq 的结果 | 对机器人公司的含义 |
|---|---|---|---|
| 最可能：推理云成为多后端中的高性能层 | Groq 保留云运营团队，区域站点持续上线；NVIDIA 许可扩大供应/技术认可，但 GPU 仍是全栈默认。 | 形成在开放模型实时推理上的可观云业务，而非颠覆 CUDA。 | 建立可切换的 Groq 后端，用于云端对话、语音、计划与开发提效；不绑定控制闭环。 |
| 最危险：技术/人才外溢后被平台化 | NVIDIA 获得的技术与人才缩小 Groq 独特性；大客户选择单一 GPU/云栈；区域承诺转化慢。 | GroqCloud 成为低差异化转售/托管层，融资继续但单位经济性承压。 | 不做股权或长期排他承诺；所有集成保留 OpenAI-compatible/API 级逃生阀。 |
| 最乐观：主权推理与实时 Agent 同时放量 | 13 站点扩至 200MW，沙特、加拿大、欧洲/亚太的本地需求转为续费；API 模型更新跟上。 | 以“确定性、地点和成本”而非单纯芯片速度成为独立推理云。 | 在区域化车队运营、语音 Copilot 和远程运维上形成优先合作，争取容量/SLA 与联合验证。 |

## 面向人形机器人公司的行动建议

### 投资判断：观察名单，不以故事替代权益边界

建议把 Groq 置于 **A 类战略观察、非优先财务投资**。支持这一判断的事实是：有实际 API/SDK、公开区域部署、多个合作方公告及 2026 年 6.5 亿美元新资金；反对事实是：关键运营数字多为公司自述，2025 年末的非独占 NVIDIA 许可与关键人员变动重写了独立公司可获取的技术和人才边界。[S7][S11][S13][S15]

只有满足以下触发条件，才进入董事会级投资讨论：

1. 获得书面披露，确认 NVIDIA 许可的 IP 范围、地域、期限、排他/再许可、未来产品权利和核心人员归属；
2. 取得按区域、模型与客户集中度拆分的已签合同额、续费、毛利、可用容量、故障和 SLA 数据，而不是开发者总数；
3. 在本公司模型/请求分布下，独立复现比 GPU 云有可观的端到端收益，并确认该收益并非来自更低精度、更短上下文或更宽松的服务等级；
4. 明确数据出境、机器人日志、个人信息和主权部署的法律与事件响应责任。

### 并购判断：不建议整体收购，关注合作权利而非控制幻想

不建议以收购 Groq LLC 为当前路径。2024 年已报道投后估值 28 亿美元，2026 年又完成 6.5 亿美元融资；更关键的是，公开协议表明技术和部分核心人员已经与 NVIDIA 产生非独占许可/流动关系。[S3][S13][S15] 即使价格可谈，也要回答“交易后是否得到决定性的架构、编译器和未来产品路线控制权”。目前公开信息不能支持肯定答案。

可讨论的替代动作是：区域/行业合作中的容量保留、联合 benchmark、面向机器人语音与云端 Agent 的联合解决方案，或者在确有可分离资产和权利时评估小范围技术授权。这里的红线是，不能把公告中的 MOU、commitment 或生态合作当作可转让收入资产。[S8][S9][S25]

### 采购/合作判断：用 POC 买信息，而不是买路线承诺

建议发起 8—12 周、双后端、可退出的 POC，GroqCloud 与现有 NVIDIA/AWS 后端同时运行。优先选三类任务：

| 场景 | 为何适合先试 | 不能试图替代的部分 |
|---|---|---|
| 云端语音助手、远程运维 Copilot | 对首 token、连续 token 和 TTS/Agent 交互敏感；失败可降级到另一后端。 | 机器人安全控制、断网时的本地决策。 |
| 结构化任务规划与客服/维修知识 Agent | 固定开放 LLM、工具调用和可观测 API 更便于做 A/B。 | 仍需评估检索、工具、网络和人工审批的全链路延迟。 |
| 大批量文本归档、代码/文档辅助 | 可比较 tokens/元、吞吐和批处理；不影响物理安全。 | 不要用小样本速度推导车队级 SLA。 |

验收门槛必须写入测试计划：同一模型版本、量化精度、上下文长度、system prompt、采样参数、并发和地域下，记录 time-to-first-token、inter-token latency、端到端 p50/p95/p99、成功率、重试率、tokens/J（若可取得）、含网络/出口的每百万 token 成本、功能正确性、tool-call/JSON 成功率、故障切换时间与数据删除审计。厂商宣称的 tokens/s 只能作为假设，不能充当验收结论。[S5][S10]

### 自研判断：自研可移植控制面，不自研 LPU 硅片

对于人形机器人公司，最值得沉淀的是**可移植推理控制面**：模型路由、请求分层（实时/非实时）、缓存、量化、可观测性、成本归因、GPU/Groq/云间 fallback 与安全策略。它会保留采购议价权，也能让任何专用推理后端变成可插拔资源。

不建议在没有稳定且巨大推理量、明确模型冻结窗口、编译器团队、流片资金、封装/供应保障和多年软件生态投入前，自研类似 Groq 的 LPU。机器人工作负载尤其混合：本体视觉、VLA/WAM、规划、仿真、训练和语音的形状差异很大。更合理的分层是本体低层控制与安全回路留在本地异构计算上，云端用 Groq 或 GPU 承担高层语言/知识/远程运维推理，训练与持续微调仍优先留在成熟 GPU 栈。该建议是工程判断，不是 Groq 已公开支持完整机器人模型的主张。

## 融资历史与合作网络

### 融资历史

| 时间 | 轮次/事件 | 金额与口径 | 已披露投资人/领投 | 证据等级与注记 |
|---|---|---|---|---|
| 2017-04 | 早期投资 | 1,000 万美元 | Social Capital | L3，TechCrunch 转述早期融资；非公司公告。[S1] |
| 2018-09 | 目标 6,000 万美元的一轮融资 | 已募集 **5,230 万美元**，不是 6,000 万美元全部完成 | Social Capital 参与；其余未披露 | L3，基于 SEC 文件报道。[S1] |
| 2021 | Series C（后续报道口径） | 3 亿美元 | 本次检索未取得完整一手投资人名单 | L3，HPCwire 标题及 2024 媒体交叉确认；估值/条款待核。[S2][S3] |
| 2024-08 | Series D | 6.4 亿美元；投后估值 28 亿美元；媒体称累计融资超 10 亿美元 | BlackRock 领投；Neuberger Berman、Type One Ventures、Cisco Investments、KDDI Open Innovation Fund III、Samsung Catalyst Fund 等 | L3，媒体报道；未取得公司融资公告，不能据此推算现金余额。[S3] |
| 2026-06 | growth capital | 6.5 亿美元；估值未披露 | Disruptive、Infinitum 领投，既有投资人再投 | L1，公司公告；用途为扩张推理云，非财务审计。[S15] |

### 合作网络：投资方/股东

| 实体 | 关系 | 可确认范围 | 证据与限制 |
|---|---|---|---|
| Social Capital | 早期投资人 | 2017 年 1,000 万美元投资及参与 2018 轮 | [S1]；当前持股/董事席位未公开。 |
| BlackRock 等 Series D 投资人 | 2024 年融资投资方 | 见上表 | [S3]；不等同于当前股权比例。 |
| Disruptive、Infinitum | 2026 growth round 领投方 | 新资金领投 | [S15]；估值和控制权未披露。 |

### 合作网络：客户/订单与部署

| 对方 | 公开关系 | 已确认事实 | 不能推导的事实 |
|---|---|---|---|
| Aramco Digital / 沙特 | 推理数据中心合作、15 亿美元承诺 | Dammam 已对 GroqCloud 服务；有项目公告。 [S8][S9] | 15 亿美元是否已签订单、已收入确认、全额交付。 |
| Bell Canada | Bell AI Fabric 独家推理供应商 | 公告称首个 7MW Kamloops 设施及六站点/500MW 项目目标。 [S11] | 全网容量已投运、Groq 独家范围以外的收入。 |
| HUMAIN | 官方 inference provider | 2025 年公告称选择/合作。 [S14][S24] | 采购金额、用量、续约。 |
| Paytm | GroqCloud 合作 | 公告称用于支付/平台智能相关推理。 [S24] | 合同额、生产规模与效果。 |
| Canva | 澳大利亚客户关系 | Sydney 公告称正在合作。 [S23] | 是否为大额/长期合同。 |

### 合作网络：产业合作与技术/科研渊源

| 类别 | 对方 | 关系 | 证据强度 |
|---|---|---|---|
| 模型/平台 | Meta | Groq 为官方 Llama API 提供快速推理预览。 | L1，共同/公司公告；模型/地区/商业条款仍有限。[S10] |
| 机房互连 | Equinix | Helsinki、Sydney 等数据中心协作与 Fabric 接入。 | L1，公司公告；不等同于 Equinix 对 Groq 股权或芯片背书。[S12][S23] |
| 技术许可 | NVIDIA | 非独占推理技术许可；Ross、Madra 等加入 NVIDIA。 | L1，公司公告；协议细节未公开。[S13] |
| 科研/政府 | 美国能源部 | 签署 MOU，探索科学推理、能效、benchmark 与供应链议题。 | L1，但为探索框架，不是采购订单。[S25] |
| 人才/技术谱系 | Google TPU | Ross 曾参与 TPU，Groq 由该专用计算经验延伸。 | L3/L1 交叉：早期报道与公司材料。[S1][S5] |

## 证据/来源台账

| 编号 | 来源与 URL | 等级 | 本报告使用范围 |
|---|---|---|---|
| S1 | [TechCrunch：2018 年融资及早期团队](https://techcrunch.com/2018/09/05/secretive-semiconductor-startup-groq-raises-52m-from-social-capital/) | L3 权威媒体/SEC 文件转述 | 2017、2018 融资；Ross/Wightman 背景。 |
| S2 | [HPCwire：Groq Closes $300 Million Fundraising Round](https://www.hpcwire.com/2021/01/13/groq-closes-300-million-fundraising-round/) | L3 行业媒体 | 2021 融资金额；与 S3 交叉。 |
| S3 | [SiliconANGLE：2024 Series D](https://siliconangle.com/2024/08/05/ai-chipmaker-groq-raises-640m-meet-rising-demand-high-speed-inference-compute/) | L3 行业媒体 | Series D、投资人、估值、收购/产品叙事；非审计报表。 |
| S4 | [Groq：LPU Architecture](https://groq.com/architecture) | L1 公司技术材料 | 编译器、确定性流水、片上内存、公司性能主张。 |
| S5 | [Groq：独立 LLM benchmark 公告](https://groq.com/newsroom/groq-lpu-inference-engine-leads-in-first-independent-llm-benchmark) | L1 引述 L2 第三方 | 2024 Artificial Analysis 测试条件和结果。 |
| S6 | [SiliconANGLE：收购 Definitive Intelligence 以扩展 GroqCloud](https://siliconangle.com/2024/03/01/ai-chip-startup-groq-acquires-definitive-intelligence-scale-cloud-platform/) | L3 行业媒体 | 2024 收购及云业务节点；金额未披露。 |
| S7 | [Groq：GroqCloud 一百万开发者](https://groq.com/blog/thank-you-1m-developers-building-with-groqcloud) | L1 公司材料 | 开发者、付费客户、社区统计，均非审计。 |
| S8 | [Aramco Digital 与 Groq：沙特推理数据中心](https://groq.com/newsroom/aramco-digital-and-groq-announce-progress-in-building-the-worlds-largest-inferencing-data-center-in-saudi-arabia-following-leap-mou-signing) | L1 合作公告 | MOU、项目目标与 2024 计划。 |
| S9 | [Groq：沙特 15 亿美元承诺](https://groq.com/newsroom/saudi-arabia-announces-1-5-billion-expansion-to-fuel-ai-powered-economy-with-ai-tech-leader-groq) | L1 公司公告 | 承诺及 Dammam 上线说法；非收入确认。 |
| S10 | [Meta 与 Groq：官方 Llama API](https://groq.com/newsroom/meta-and-groq-collaborate-to-deliver-fast-inference-for-the-official-llama-api) | L1 合作公告 | API 合作、625 tokens/s、迁移主张。 |
| S11 | [Groq 与 Bell Canada](https://groq.com/newsroom/groq-becomes-exclusive-inference-provider-for-bell-canadas-sovereign-ai-network) | L1 合作公告 | Bell AI Fabric、容量/站点目标、2,000 万 tokens/s 公司披露。 |
| S12 | [Groq Helsinki/Equinix 部署](https://groq.com/newsroom/groq-launches-european-data-center-footprint-in-helsinki-finland) | L1 公司公告 | 欧洲部署和互连关系。 |
| S13 | [Groq 与 NVIDIA 非独占许可](https://groq.com/newsroom/groq-and-nvidia-enter-non-exclusive-inference-technology-licensing-agreement-to-accelerate-ai-inference-at-global-scale) | L1 公司公告 | 许可、管理层变动、独立运营；条款未公开。 |
| S14 | [Groq：HUMAIN 与全球部署](https://groq.com/newsroom/groq-solidifies-status-as-emerging-hyperscaler-with-new-global-deployment) | L1 公司公告 | HUMAIN/provider 关系及开发者数字。 |
| S15 | [Groq：2026 年 6.5 亿美元融资](https://groq.com/newsroom/groq-raises-usd650m-to-scale-its-ai-inference-cloud-business) | L1 公司公告 | 金额、领投、13 站点、5M 开发者、200MW 目标，均为公司披露。 |
| S16 | [Groq API Cookbook](https://github.com/groq/groq-api-cookbook) | L1 开源代码库 | 可观察的示例、工具调用、RAG/MCP/批处理入口。 |
| S17 | [Groq Python SDK](https://github.com/groq/groq-python) | L1 开源代码库 | 同步/异步 API 客户端与开发者入口。 |
| S18 | [NVIDIA TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) | L1 竞品技术材料 | GPU 推理软件栈的对照。 |
| S19 | [Cerebras Inference](https://www.cerebras.ai/inference) | L1 竞品技术材料 | Wafer-Scale 推理服务路线的对照。 |
| S20 | [AWS Inferentia](https://aws.amazon.com/ai/machine-learning/inferentia/) | L1 竞品技术材料 | 云内专用推理芯片/服务的对照。 |
| S21 | [AMD ROCm 文档](https://rocm.docs.amd.com/) | L1 竞品技术材料 | GPU 软件栈对照。 |
| S22 | [Groq：MoE 与大模型扩展](https://groq.com/blog/from-speed-to-scale-how-groq-is-optimized-for-moe-other-large-models) | L1 公司技术材料 | RealScale、MoE、大模型支持主张。 |
| S23 | [Groq Sydney/Equinix/Canva](https://groq.com/newsroom/groq-expands-to-asia-pacific-with-sydney-data-center-to-power-the-next-generation-of-ai-inference) | L1 公司公告 | APAC 部署和客户关系声明。 |
| S24 | [Groq 与 Paytm](https://groq.com/newsroom/groq-partners-with-paytm-delivering-real-time-ai-for-payments-and-platform-intelligence-in-india)；[Groq 与 HUMAIN One](https://groq.com/newsroom/groq-powers-humain-one--real-time-ai-operating-system-for-enterprise) | L1 合作公告 | 行业应用合作；未披露订单额。 |
| S25 | [Groq 与美国能源部 MOU](https://groq.com/newsroom/groq-partners-with-us-department-of-energy-to-advance-ai-inference-and-next-generation-computing-infrastructure) | L1 公司公告 | 研究/探索性合作边界。 |

## 冲突与未确认事项

| 事项 | 支持证据 | 反对证据/缺口 | 当前处理与下一步 |
|---|---|---|---|
| 沙特 15 亿美元是否为可确认订单 | Groq 明确称取得 15 亿美元 commitment。[S9] | 没有合同类型、预付款、部署节奏、验收或收入确认；2024 公告首先是 MOU。[S8] | 只称“承诺”，不计收入；索取合同摘要、里程碑与付款/验收材料。 |
| “全球最快/最低成本/10 倍能效”是否普适 | 2024 有一项公开独立 API benchmark；架构材料提出 up to 10x 能效。[S4][S5] | benchmark 模型与请求形状有限；没有同协议、同地区、同模型的长期 TCO/功耗审计。 | 视为待验证假设；执行双后端 benchmark。 |
| 2026 运营规模和盈利能力 | 公司称 13 站点、5M 开发者、trillions tokens/week、200MW 目标。[S15] | 没有审计收入、付费转化、客户集中度、产能利用率、CAPEX、毛利和停机数据。 | 不以开发者数推导营收；投资尽调索取 cohort 与财务指标。 |
| NVIDIA 许可后的独立技术权利 | 公告确认非独占许可且 Groq 保持独立。[S13] | IP 范围、许可期限/费用、未来设计、关键人才数量和客户关系边界未公开。 | 作为投资、长期采购和并购的 P0 先决条件。 |
| NVIDIA 交易后的 CEO/管理权连续性 | 2025-12 许可公告称 Simon Edwards 出任 CEO。[S13] | 2026-06 融资公告称公司由 CEO Adam Winter 领导，未说明 Edwards 的去向、交接日期或授权边界。[S15] | 不自行裁决；在任何投资或长期合作前索取最新董事会、法定高管和签约授权证明。 |
| Groq 是否是 CUDA-like 加速计算平台 | 有编译器、SDK、API、跨芯片架构、示例库。[S4][S16][S17] | 公开定位为推理；本报告未找到满足分类规则所要求训练/后训练、外部设备编程与完整软件栈的证据。 | 不列入 2.1；待有可核实产品文档后复审。 |
| 机器人 VLA/本体部署适配性 | 架构可运行“LLM 和其他模型”的公司表述。[S4] | 未见公开、可复现的 VLA/WAM、本体传感器时序、边缘离线和功能安全交付证据。 | 不将其写作机器人本体芯片；只试云端认知任务。 |

## 产业链分类复核

**主二级分类：1.4 其他 AI 芯片架构（LPU）。**

理由是 Groq 当前可验证的核心技术和收入承载物是 LPU 推理硬件/系统及由其支撑的 GroqCloud：LPU 的软件优先、确定性数据流、片上内存和多芯片编译映射，是公司与 GPU、TPU、NPU 的稳定架构差异；公司对外销售/交付的也是该专用推理能力。[S4][S5][S15] 这与分类规则所列的 LPU 示例直接相符，且比“推理框架”或“加速计算平台”更能反映其价值创造。

**不设正式次分类。**

- 不列 `2.1 加速计算平台（CUDA-like）`：虽然 Groq 有编译器、SDK、文档和开发者入口，但截至截止日公开证据不能同时满足规则中训练或后训练、广泛工作负载和可扩展设备编程等硬条件；Groq 自己也定位为推理平台。[S4][S16][S17]
- 不列 `5.2 推理框架`：GroqCloud 是完整的芯片绑定推理服务和 API，不是以框架软件为主要独立价值承载物。把它放入 5.2 会掩盖 LPU 硅片/系统才是技术和资本密集度来源。
- 负载关联可记录为 `6.1 语言大模型（LLM）` 的**工作负载关系**，不是公司次分类。Groq 公开最强证据集中在 Llama 与其他开放 LLM 推理，尚不足以将模型类型标签当成公司商业主次分类。[S5][S10]

## 方法论说明

本报告采用横纵分析法：纵轴追踪 Groq 从 TPU 谱系、软件先行架构、芯片产品化到推理云和 NVIDIA 许可的演进；横轴以 GPU 软件栈、专用推理和云内专用芯片为当前截面。所有结论均区分已披露事实、公司主张和研究判断；未公开的合同、性能和财务数据均保留为待核验事项。
