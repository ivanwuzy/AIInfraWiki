# RadixArk, Inc. 横纵分析报告
> 研究截止日：2026-08-11 ｜对象类型：开源推理与后训练基础设施公司 ｜法定主体：RadixArk, Inc.（公司隐私政策直接披露）

## 结论先行

RadixArk 的核心资产不是一朵已经被收入验证的“AI 云”，而是围绕 **SGLang** 的开源推理运行时、围绕 **Miles** 的强化学习（RL）后训练框架，以及正被建设中的托管基础设施。公司 2026 年 5 月官方宣布以 4 亿美元 post-money 估值完成 1 亿美元种子轮；隐私政策显示其已有 `platform.radixark.com`、账户、支付和计算资源服务的产品边界。[S1][S2] 但公开资料尚不能证明托管平台的正式可用性、付费客户、收入、毛利、服务等级或客户留存。

对人形机器人公司而言，它应被看作**推理内核和后训练工程的开源技术候选、外加一个早期战略观察对象**，不是已可直接收购或替代内部数据/仿真系统的成熟平台。SGLang 已有可审阅的 PD（prefill/decode）分离、路由、KV cache 传输、模型和多硬件文档；Miles 也有 SGLang rollout 与 Megatron-LM 训练拼接的真实开源实现和部署说明。[S3][S4][S5] 这些证明“技术可用”，不等于证明 RadixArk 已把它们以企业合同和生产 SLA 售出。

建议为：**P0 采用开源 SGLang 做独立基准和非关键推理 POC；P1 以 Miles 验证机器人语言/视觉—语言后训练中的 rollout、奖励、权重同步和可复现性；投资仅在 IP、开源治理、付费转化及硬件路线尽调通过后进入立项；目前不启动并购。** 主分类应为 `5.2 推理框架`，而非 `4.2 推理PD分离` 或 `5.3 分布式训练工具`：后两者是已存在的显著功能和产品线，但公司的技术—商业叙事、开源积累与当前主要入口仍以 SGLang 推理引擎为中心。

## 一、研究边界、主体与判断标准

### 1.1 主体确认与研究对象

RadixArk 官网将自己定义为建设大规模推理和训练系统的基础设施公司；官网称其推理侧“build on SGLang”，RL 训练侧“build on Miles”，并计划在二者之上交付托管基础设施和工具。[S1] 其隐私政策明确将服务提供者写为 **RadixArk, Inc.**，并列出 `radixark.com`、`platform.radixark.com`、AI infrastructure platform、账户、支付、业务客户协议和计算资源交付。[S2] 因此本报告使用 RadixArk, Inc. 作为主体，而不是只把 SGLang 社区项目当作公司本身。

不过，主体确认不自动解决 IP 与治理问题。SGLang 是 Apache-2.0 开源项目，许可证版权页写作 “SGLang Team”；Miles 同样采用 Apache-2.0，但其 LICENSE 版权标记为 “Copyright 2025 Zhipu AI”。[S6][S7] 公司对项目的商业化投入、雇员贡献和托管服务并不自动等同于对全部开源代码的排他控制权。任何投资或收购必须把商标、域名、代码提交者 CLA、员工发明转让、第三方依赖、维护者权限和可商用分支单独核验。

### 1.2 本报告的证据规则

本研究将事实分为四层：

- **一手产品/代码/许可证资料**：可证明公开接口、部署条件、代码许可与文档所述功能；
- **公司公告与官网主张**：可证明公司对融资、方向和开源采用规模的自述，但不自动构成收入或性能审计；
- **媒体报道**：用于补充创始团队、分拆脉络及商业化线索，和一手资料交叉，不用来虚构客户合同；
- **研究判断**：将技术结构与机器人场景相连，均明确是投资/采购推断而不是公司承诺。

研究的关键区分是：**开源项目有人用**、**公司提供收费托管**、**公司拥有可重复的企业收入**是三件不同的事。RadixArk 目前对第一件披露最多，对后两件公开证据明显较弱。

## 二、纵向分析：从学术推理语言到商业化基础设施公司

### 2.1 2023—2024：SGLang 先作为研究系统出现

SGLang 的学术起点早于 RadixArk。论文《SGLang: Efficient Execution of Structured Language Model Programs》于 2023 年 12 月提交、2024 年 6 月修订；论文作者包括 Ying Sheng、Ion Stoica、Joseph E. Gonzalez 等。[S8] 当时它并非以“云服务公司”的形态出现，而是由前端语言和运行时组成的系统：前端用于生成、多调用和并行控制，运行时用 RadixAttention 复用 KV cache、用压缩有限状态机改善结构化输出解码。论文在当时的模型和任务上报告最高 6.4 倍吞吐改善。[S8]

这里埋下了公司日后最重要的选择。SGLang 从一开始解决的不是模型训练本身，也不是卖 GPU，而是让复杂模型程序在既有硬件上更高效地运行。它的优化对象是提示词前缀、结构化约束、调度和 KV cache；这种系统知识很适合长上下文、Agent、多轮调用和多模态模型的成本问题，也天然会被模型、硬件、驱动和网络升级牵动。

媒体报道称，SGLang 起源于 UC Berkeley 的 Ion Stoica 实验室；Ying Sheng 是关键贡献者，曾任 xAI 工程师与 Databricks 研究科学家，后出任 RadixArk 联合创始人兼 CEO。[S9] 这属于高质量媒体的团队脉络补充，而非公司官网的正式人员披露。公开资料还不足以完成现任全体高管、董事会、持股和所有核心维护者与公司的劳动/IP 关系映射，后文将其列为尽调前置条件。

### 2.2 2025—2026 年初：开源项目走向商业主体的窗口

推理框架的商业化窗口来自一个简单却棘手的现实：模型能力扩张会增加推理账单，但算法团队常常没有足够系统工程资源去反复实现 KV cache、模型并行、批处理、结构化输出、硬件适配、可观测性和故障治理。开源引擎若能成为事实入口，就可能把免费代码的采用转化为托管、支持、性能优化与企业控制面收入；反过来，Apache 许可又让任何云厂商或客户自建、分叉或自行支持成为可能。

TechCrunch 2026 年 1 月报道将 RadixArk 称为 SGLang 背后的商业公司，并称公司曾获包括 Lip-Bu Tan 在内投资人的天使资金、部分 SGLang 维护团队已转入商业主体；报道援引“熟悉情况人士”说公司开始对托管服务收费。[S9] 这些信息有解释价值，却不能取代融资文件或审计报表：天使轮金额、估值、具体股权和收费服务的 GA 状态均未由公司在该报道中逐项确认。报告不将其写为经审计营业收入。

这一阶段的战略含义在于，RadixArk 并非试图把 SGLang 闭源化。官网明确把“继续投资 SGLang”“在可能时开源构建”作为方向；SGLang 和 Miles 的代码许可证也保留了开放再利用权。[S1][S6][S7] 它实际赌的是“开放分发 + 高性能工程 + 托管控制面”能比单纯售卖专有 API 更快建立技术标准。这样的路径获客效率高，却把商业护城河从源代码排他性转移到维护速度、版本可靠性、托管运维、性能工程和社区信任上。

### 2.3 2026 年 5 月：种子轮正式宣布，叙事从项目扩展到公司

2026 年 5 月 5 日，RadixArk 官方发布启动公告：完成 **1 亿美元种子轮**、post-money 估值 **4 亿美元**；Accel 领投、Spark Capital 共同领投，NVentures、Salience Capital、A&E Investment、HOF Capital、Walden Catalyst、AMD、LDVP、WTT Fubon Family、MediaTek、Databricks 等参与。[S10] 这是截至研究截止日可直接核验的正式融资事件，应优先于早期媒体“约 4 亿美元估值、金额未能确认”的报道。[S9][S10]

公告把融资用途表述为：扩大 SGLang 和 Miles、支持新的模型架构和硬件平台、建设面向规模化 AI 团队的托管基础设施。[S10] 这说明公司的产品组合至少有三层：

1. **开源推理核心 SGLang**：面向 LLM、多模态模型、结构化输出、KV cache、调度和多硬件的运行时；
2. **开源后训练核心 Miles**：将 SGLang rollout 与 Megatron-LM 训练连接，用于大规模 RL/post-training；
3. **尚在建设/商业化早期的托管平台**：官网和隐私政策已表明有平台服务边界，但未公布定价、SLA、客户名单或收入拆分。[S1][S2][S10]

公司公告称 SGLang “daily powers trillions of tokens”，并列举 Google、Microsoft、NVIDIA、Oracle、AMD、LinkedIn、xAI、Thinking Machines Lab、humans& 等行业组织；也称 Miles 已被行业团队用于大规模 MoE 训练。[S10] 这应严格阅读为**公司关于开源项目采用的主张**，不是这些机构对 RadixArk 托管平台的采购确认，也不是这些机构均为付费客户或投资方的证据。技术采用和公司收入之间的鸿沟，恰是本标的现阶段最需要尽调的地方。

### 2.4 SGLang：从推理运行时扩展为生产服务栈

当前 SGLang 官网定位是面向 LLM 与多模态模型的高性能推理框架，强调从单 GPU 到分布式集群、OpenAI-compatible API、PD 分离、投机解码、并行与优化 GPU kernel。[S11] 其硬件文档公开列出 NVIDIA GPU、AMD GPU、Ascend NPU、CPU server、Jetson Orin、TPU 和 Intel XPU 等平台入口。[S12] 这比“只支持 CUDA”的推理框架具有更大的供应链想象空间，但列表本身不代表每个模型、量化、并行策略和生产 SLA 都已在每种硬件上等价验证。

SGLang 的 Model Gateway 说明了它已不只是本地 Python 库：文档描述一个统一控制面来注册、监控和编排常规/P/D worker，数据面可处理 HTTP、gRPC、OpenAI-compatible 后端与 PD 路由，包含健康检查、熔断、限流、队列、Prometheus、OpenTelemetry、Kubernetes 服务发现、mTLS 等生产要素。[S13] 文档是“有功能”的强证据，但仍不能证明全部企业特性在 RadixArk 托管服务中已商业可得、已通过外部安全认证或已被付费客户部署。

### 2.5 Miles：从 rollout—train 的衔接切入 RL 后训练

Miles 的公开 README 将其定义为面向大规模模型 post-training 的企业级 RL 框架，路线是 SGLang 提供高吞吐 rollout、Megatron-LM 提供可扩展训练。[S4] 其 Quick Start 指定一个含 8 张 H100/H200/B 系列 GPU、约 200GB 磁盘和可用 GPU Docker 的节点；示例 GRPO 流程在本地 Ray 集群中发起训练，训练端把模型转成 Megatron checkpoint，rollout 引擎仍读 HuggingFace 目录。[S5] 这既证明了可执行的工程路径，也说明它并非“零依赖的通用训练平台”。

在默认同置模式中，SGLang engine 和 Megatron trainer 在同一组 GPU 上交替使用；权重同步走本机 IPC/NCCL。若做解耦运行，文档给出 `broadcast`（NCCL）或 `p2p`（Mooncake RDMA）等权重传输模式。[S5] Miles 的训练后端文档则明确：生产训练 backend 是 Megatron-LM，FSDP2 是实验性选项；参数并行的实际可组合性受模型和 kernel 限制，不能任意提高 TP、PP、CP、EP、ETP。[S14]

因此 Miles 是一个真实的分布式后训练工具，但它的价值应准确描述为**把既有 SGLang、Megatron、Ray、Mooncake/NCCL 等组件整合为 RL 工作流并在部分路径上做性能/稳定性工程**，而非从零拥有全部训练编译器或集群调度器。其高级文档还写有 FP8/MXFP8/NVFP4/INT4 QAT、MoE rollout routing replay、P2P RDMA 权重更新、容错、投机解码、LoRA 训练与服务等特性；每一项都需要在目标模型和硬件下复验，不能由特性清单推导为客户交付能力。[S15]

### 2.6 融资历史：确认与不确认的边界

| 时间 | 事件/金额 | 投资方 | 证据等级与处理 |
|---|---|---|---|
| 2023-12 / 2024-06 | SGLang 论文提交/修订 | 学术作者团队 | 可确认项目的研究时间线，不是公司融资。[S8] |
| 2025 前后 | 天使资本（金额、时间未公开核验） | TechCrunch 称包括 Lip-Bu Tan 的投资人 | 二手媒体线索；不计入融资总额或 cap table。[S9] |
| 2026-05-05 | 种子轮，1 亿美元；4 亿美元 post-money | Accel 领投，Spark Capital 共同领投；NVentures、AMD、Databricks 等参投 | 公司官方公告，当前最高置信融资记录。[S10] |

种子轮数字很大，但不能把 4 亿美元估值当作对未来收入、行业地位或并购退出的证明。它说明资本市场愿意为 SGLang 的开源势能、维护团队和潜在托管商业化支付期权价值；它尚未回答服务收入、毛利、客户集中度、续费和资本效率。

## 三、技术与产品边界：推理框架、PD 分离和后训练各自是什么

### 3.1 SGLang 的核心价值是“把推理时间表重新排一遍”

推理系统的性能不只取决于芯片 FLOPS。长提示词处理时，prefill 是计算密集型；逐 token 生成时，decode 更受显存和 KV cache 制约。统一 batch 调度会使到达的 prefill 打断 decode，或使不同 data-parallel worker 在两类负载间失衡，最终伤害 token 延迟。[S3] SGLang 的 PD 分离让两阶段分配给不同 worker，配合路由器和缓存传输引擎进行调度。它既是技术特性，也是一种集群部署架构，不应与“公司已经提供大规模 PD 托管服务”混为一谈。

文档已给出 Mooncake、NIXL 等 KV cache transfer engine，带有 IB device、RoCE、NVLink 和多节点 DeepSeek 示例；还披露因为 profiler 限制，P/D worker 要分别 profile，某些环境变量会在节点失联时影响 TTFT 和资源清理时间。[S3] 这些细节反而提醒采购方：PD 不只是把开关打开。网络拓扑、缓存移动、路由策略、请求长度分布、模型并行、失败重试和可观测性共同决定是否真的更便宜、更快。

### 3.2 “异构硬件支持”不是“跨 XPU 无损调度”

SGLang 文档将多个 GPU/NPU/TPU/CPU 平台列为支持入口，官网也把多硬件与多模型灵活性作为卖点。[S11][S12] 这足以证实它有跨硬件适配方向和一定工程实现，尤其值得在供应链受限或多云环境中关注。但它不满足“统一跨 XPU 调度平台”的更高证明门槛：公开页面没有为每个芯片—驱动—kernel—模型—量化—并行—PD 组合给出一致的性能、稳定性和生产 SLA 矩阵。

对机器人公司，这一区别很实际。离线 VLM/LLM 服务可接受较复杂的硬件适配和回退；面向设备的实时控制或安全相关推理需要固定的延迟、热管理、故障隔离和版本锁定。SGLang 的多硬件能力值得作为评估起点，不能被当成自动抹平 CUDA、ROCm、Ascend CANN、TPU runtime 及模型 kernel 差异的承诺。

### 3.3 Miles 不是通用数据闭环平台

Miles 的四个核心对象是 prompt dataset、SGLang rollout、reward model、actor/reference；其训练循环是采样、打分、计算 GRPO/优化、同步更新权重。[S16] 这与机器人后训练的某些问题很相关，例如把仿真成功率、轨迹合规性、任务完成率或人类偏好转为奖励，再用 rollout 改进策略/语言—视觉模型。但它没有公开表明自己提供机器人传感器采集、物理仿真、数据权属、标注、数字孪生、硬件在环或安全验证的全栈产品。

更准确的定位是：若本公司已有数据、仿真和 reward pipeline，Miles 可能缩短大模型/多模态模型后训练的工程路径；若还没有可靠的任务定义、奖励验证和安全 gate，换一个 RL 框架并不能产生可部署的机器人能力。技术框架只会加速已有闭环，不会替代闭环本身。

### 3.4 开源许可证和分叉风险

Apache-2.0 允许复制、修改、分发和商用，也包含专利授权及 NOTICE/声明保留要求。[S6][S7] 对用户，这降低了 lock-in：可私有化、自行修复或切换服务商。对 RadixArk，这限制了单靠源代码收费的能力，因而其经济护城河必须来自更快版本、托管可靠性、企业支持、性能剖析、兼容矩阵、社区治理和难以复制的运维数据。

Miles LICENSE 标为 Zhipu AI 版权尤其需要审慎处理。[S7] 这并不等于 RadixArk 没有合法使用或商业化权利，也不等于存在争议；它只是说明“RadixArk 绝对拥有全部核心 IP”没有被公开材料证明。投资/收购尽调要取得上游 fork 许可、贡献记录、商标归属和第三方组件 SBOM，而不是凭公司域名或仓库组织名推断产权完整。

## 四、横向分析：同样叫“推理基础设施”，活法完全不同

### 4.1 竞品版图与 RadixArk 的位置

SGLang/RadixArk 处于开源高性能推理运行时与后训练基础设施的交叉处。它既面对 vLLM、TensorRT-LLM、NVIDIA Dynamo 等推理引擎/运行时竞争，也会面对 Fireworks、Baseten、Together、Anyscale 等托管推理或平台公司的商业化竞争；Miles 则与 Megatron-LM、DeepSpeed、TRL、OpenRLHF、verl 等训练/RL 体系在不同层面重叠。它们并不是一张功能表中的同义词。

| 路线/代表 | 主要价值 | 相对 RadixArk 的位置 | 对机器人公司的含义 |
|---|---|---|---|
| vLLM | 开源连续批处理、PagedAttention 和广泛推理生态 | 最直接的开源推理替代/比较对象；同样有商业化外溢可能 | 应与 SGLang 在目标模型、长上下文、并发、故障和运维上同台基准。 |
| TensorRT-LLM / NVIDIA Dynamo | NVIDIA 软硬一体 kernel、编译和部署优化 | 当硬件高度 NVIDIA 化时，厂商原生路径常有更深的低层协同 | 供应链单一时可追求极限性能；多硬件时需权衡锁定与适配成本。 |
| Fireworks / Baseten / Together 等 | 托管推理、弹性、开发者体验与企业服务 | 竞争的不是开源代码，而是把代码变成可靠服务与合同的能力 | 若只需要 API，比较 TCO、数据治理和 SLA；若要私有部署，开源 engine 更有价值。 |
| Megatron-LM / DeepSpeed / FSDP / verl 等 | 大模型训练并行、内存、RL 或后训练组件 | Miles 站在编排/整合层，Megatron 是其公开生产训练后端 | 不能把 Miles 视为替代 Megatron；要评估组合的可维护性和扩展性。 |
| KServe / Ray Serve / Kubernetes 网关 | 容器、扩缩容、流量和服务治理 | SGLang Gateway 可管理 worker，但仍需与更广的集群控制面共存 | 应明确谁负责任务调度、认证、观测和灾备，避免双控制面冲突。 |

### 4.2 与 vLLM：标准化社区势能对运行时差异化

vLLM 与 SGLang 的共同点是开源、面向高吞吐服务、不断扩展模型和硬件。客户不会因为某一个 benchmark 百分比就永久选择其中之一；真正的迁移成本在模型兼容、API 行为、量化、tool call、可观测性、驱动版本、团队熟练度和长期维护。RadixArk 的优势来自 SGLang 的结构化程序历史、RadixAttention、PD 拓扑和深入的网关/训练衔接；风险也来自源代码可得，竞争者能够实现类似优化或客户自行集成。

因此不应声称 SGLang 在所有模型上“最快”。论文的最高 6.4 倍吞吐来自特定历史版本、特定任务和基线；官网“fastest”是公司定位。[S8][S11] 在机器人公司，最有意义的对比是真实 VLM/语言模型的输入长度分布、图像/视频前处理、工具调用、并发和功耗，而非用通用 LLM token benchmark 代替业务吞吐。

### 4.3 与 NVIDIA 路线：深度优化和供应安全的张力

TensorRT-LLM 等 NVIDIA 路线在 CUDA、kernel、NVLink/NVSwitch、量化和 GPU generation 上可深入优化；代价是硬件与软件路径集中。SGLang 的硬件入口更广，PD 文档也展示 RoCE/IB/NVLink 等不同转移条件。[S3][S12] 这为供应多元化留出选择，却会把最难的工作放到适配、测试与每次升级的 regression 上。

对于计划自研训练或推理芯片的机器人公司，RadixArk 的潜在战略意义不在于“买它就拥有跨芯片生态”，而在于可合作把新的 kernel、模型 runtime、服务 API 和 PD 数据路径接入主流开源引擎。是否值得战略投资，取决于它是否愿意并且能以可维护的方式支持本公司芯片；这一点必须以路线图、代码、性能基准和 support commitment 写入协议，不能只凭“多硬件平台”页面判断。

### 4.4 与托管推理公司：产品化才是尚未被证明的第二场比赛

RadixArk 官网称其会交付 managed infrastructure，隐私政策也涵盖平台、支付、业务客户和计算资源；媒体称其开始向托管服务收费。[S1][S2][S9] 这些构成“已开始商业化”的线索，而非托管业务成熟的证明。相比已经公开产品层级、合约、区域、定价或大规模企业案例的托管推理公司，RadixArk 的公开财务与客户证据仍处于早期。

这会产生一个看似矛盾但很健康的采购结论：应优先采用它的开源软件来获得自主性，同时对尚未被充分披露的托管层保持严格的供应商审查。若公司要购买服务，需要独立核验数据驻留、模型权重/提示词保密、日志保留、训练数据隔离、可用性、事故通知、成本上限、出口迁移和源码/容器可移植性。

### 4.5 用户视角与开源治理

公开资料缺少可归因的独立用户访谈、支持工单统计和第三方生产评测，不能凭 GitHub star 或公司列举的名称虚构用户口碑。能确认的是：SGLang 有公开安装、硬件、模型、PD、网关等文档，Miles 有从容器到 checkpoint、指标、dashboard、失败恢复的操作说明。[S3][S5][S12][S13] 这些降低了评估门槛，也意味着使用者需自行承担兼容、性能复现和开源供应链治理。

对一家公司而言，社区活跃是漏斗而不是护城河。最需要追问的是：谁拥有项目的发布权限？企业客户遇到 P0 故障时由谁响应？开源 PR 与商业 roadmap 是否发生冲突？性能关键修改何时开源？大型云厂商分叉后，RadixArk 的托管服务还有什么不可替代性？目前公开资料不足以回答。

## 五、横纵交汇：开源分发形成护城河，也把商业价值推向更难的地方

SGLang 在 2023 年以研究系统出现，优先积累的是运行时的性能洞察和开发者信任；RadixArk 在 2026 年成立/正式启动后试图将这份技术势能外溢至托管推理和 RL 后训练。[S8][S10] 历史使公司拥有比“从零卖 API”的创业公司更快的技术入口，也让它必须面对比“闭源软件许可”更苛刻的商业问题：客户为何不直接运行 Apache-2.0 代码，或改用另一套开源引擎？

答案如果成立，不会是源代码本身，而是工程连续性。PD 分离不是一个孤立功能，它依赖 KV cache 传输、路由、网络、容错、模型并行和观测；Miles 的 RL 也不是一个算法名词，它依赖 rollout、奖励、训练后端、权重同步和 checkpoint。RadixArk 若能把这些复杂度变成可复用、可审计、可支持的生产路径，就可能把免费分发转成高价值基础设施服务。若做不到，开源采用再高也可能主要替竞争者扩张了生态。

### 5.1 三种情景

**最可能情景：开源推理核心强、托管收入仍处于验证期。** SGLang 继续在性能、模型和多硬件社区中扩大采用，Miles 在 RL/post-training 使用者中获得工程反馈；公司利用种子资金建设支持和托管层。此时应将其当作重要技术生态点，而不是用 4 亿美元估值反推成熟服务收入。

**乐观情景：成为“推理 runtime + 后训练 control plane”的独立标准层。** 公司能把 SGLang 的 PD、网关、安全和可观测性做成可迁移的企业部署，把 Miles 的 rollout—training loop 扩展到多模型、多硬件和持续学习，并以托管/SLA/调优服务实现高毛利。形成该结果需要持续维护者优势、企业支持组织、硬件伙伴实际落地与透明的安全/性能证明。

**危险情景：开源影响力与可捕获价值脱钩。** 大型云、芯片厂商或客户自行运行/分叉 SGLang；推理优化快速同质化；Miles 的上游依赖和 IP/许可证复杂性降低企业采用意愿；托管服务在价格、可用性和销售上无法追上成熟云平台。早期预警指标是高下载/贡献而低付费转化、核心维护者流失、版本治理争议、支持成本侵蚀毛利和客户过度依赖少数硬件/云伙伴。

## 六、面向人形机器人公司的投资、采购、并购与自研建议

### 6.1 P0：先以开源软件做可复现实验，不先买故事

建议在隔离集群完成 6—8 周 SGLang POC，并以 vLLM/现有栈为基线。至少测试三种负载：多模态机器人助手或 VLM 的图文输入；长上下文任务规划/回放检索；大量短请求的工具调用或边缘—云协同服务。记录 TTFT、TPOT、p95/p99、GPU 显存/利用率、KV cache 命中、网络流量、故障恢复、版本升级和每有效请求成本。若测试 PD 分离，须分别测 RoCE/IB/NVLink 条件、请求长度分布和节点失败下的资源清理，不用平均吞吐掩盖尾延迟。[S3]

P0 的通过标准不是“跑通 demo”，而是目标模型、目标硬件和内部 API 下比基线有可复现收益，且控制面能融入既有 Kubernetes、认证、日志和数据治理。退出条件包括：多模态模型或关键算子不兼容；PD 在实际并发下恶化尾延迟；升级引入不可接受的版本风险；安全、许可证或可观测性无法满足内部标准。

### 6.2 P1：Miles 适合验证后训练工程，不替代机器人数据闭环

若公司已有稳定的仿真/数据奖励信号，可做一项受控 Miles 验证：把任务成功率、轨迹约束、语言计划一致性或人工偏好组织为 reward，比较当前 RL/后训练管线与 Miles 的 rollout 吞吐、恢复能力、checkpoint 可移植性、权重同步时间、训练稳定性和工程工时。要求在 8 GPU 或更大目标环境、真实模型和真实数据上复现，不以示例中的 Qwen/数学奖励分数代替机器人指标。[S5][S16]

不建议将 Miles 直接接入机器人在线控制或让其替代仿真、数据治理与安全验证。它能提高 post-training 的系统效率，不能判定奖励是否正确，也不能承担现实世界事故的安全责任。

### 6.3 投资：战略观察优先于估值追逐

**建议：进入战略观察名单，可争取 POC 支持和下一轮优先尽调权；当前不应以“已验证托管平台”估值逻辑领投。** 正面因素是明确的开源技术资产、SGLang 的系统工程深度、PD/网关/Miles 的技术协同性、以及官方已确认的 1 亿美元资金储备。[S3][S10] 保留意见是付费客户、ARR、毛利、运行规模、硬件支持深度、团队/股权和开源治理均未被公开充分证明。

投资前需取得：

1. 最新 cap table、董事/投票权、期权池、资金用途与可转债/SAFE 条款；
2. SGLang、Miles、商标、域名、贡献者协议、上游 fork 和所有员工 IP 转让文件；特别解释 Miles 许可证中的 Zhipu AI 版权；
3. 按开源支持、私有化、托管计算、性能咨询拆分的收入、毛利、续费、销售周期、客户集中度和支持成本；
4. 可核验的付费客户访谈与服务 SLA，不以“project adoption”名单代替；
5. 按硬件—驱动—模型—量化—并行—PD 的兼容/回归矩阵，以及安全响应、漏洞披露和开源发布流程。

### 6.4 并购：现在不宜启动控制权交易

**建议：不启动并购报价。** 公司刚完成大额种子轮，开源项目权属与核心维护者关系尚待尽调，且其生态价值依赖于对多云、多芯片、多用户的中立开放姿态。过早收购不仅难以获得合理价格，也可能让外部社区把核心项目视为被单一机器人公司控制，削弱其最有价值的分发渠道。

只有在以下条件同时满足时再评估：本公司的 POC 显示 SGLang/Miles 对机器人负载存在持久优势；商业托管/支持收入经独立访谈验证；核心团队与关键提交者可留任；所有 IP 和上游许可证允许所需的控制权安排；收购后仍可保持开源治理信誉和多硬件伙伴关系。

### 6.5 自研边界

应自研的是机器人强相关的模型选择、边缘—云编排、任务优先级、数据/模型/轨迹归因、仿真 reward、安全 gate 和设备端运行时。推理引擎、KV cache、PD 路由和通用 RL 系统层不宜在短期重复建设，除非开源 POC 证明其性能、许可、安全或硬件适配无法满足需求。若考虑自研芯片，应将 SGLang 当作可能的 runtime 适配合作入口，而不是把它误认为已经解决了编译器、算子、通信库、驱动和设备端工具链的问题。

## 七、合作网络、冲突与待验证事项

### 7.1 合作网络必须分层阅读

| 关系类型 | 已公开对象 | 证据所能支持的关系 | 不能推导的内容 |
|---|---|---|---|
| 投资方/潜在股东 | Accel、Spark Capital、NVentures、AMD、Databricks 等 | 官方种子轮中列为领投、共同领投或参与者。[S10] | 当前持股、董事席位、排他合作、采购金额。 |
| 开源项目/技术生态 | SGLang、Miles、Megatron-LM、Ray、Mooncake、NIXL | 产品文档/代码显示依赖、集成或数据路径关系。[S3][S4][S5][S14] | 商业客户、独家授权或共同开发合同。 |
| 公司自述的技术采用方 | Google、Microsoft、NVIDIA、Oracle、AMD、LinkedIn、xAI 等 | 官方公告称 SGLang 为这些组织等每日处理 token。[S10] | RadixArk 平台付费客户、合同、收入、持续部署。 |
| 人才/科研渊源 | UC Berkeley、Ion Stoica 实验室、Databricks、xAI | 媒体报道与论文作者信息支持项目/人才脉络。[S8][S9] | 机构持股、IP 所有权、联合研发权利。 |

### 7.2 冲突与未确认项

| 议题 | 已有证据 | 冲突/缺口 | 对判断的影响与验证动作 |
|---|---|---|---|
| 公司成立/启动日期 | 公司 2026-05-05 正式启动公告；媒体称此前已运营数月。[S9][S10] | 法人注册日、实际运营起点及早期融资文件未公开 | 以官方启动日做公开商业节点；向公司索取 Delaware 注册与 cap table。 |
| 托管平台商业化 | 官网说要交付 managed infrastructure；隐私政策有平台/支付/计算服务；媒体称开始收费。[S1][S2][S9] | GA、定价、SLA、收入与客户未披露 | 不按成熟云估值；核验合同、收入和用户访谈。 |
| SGLang 采用规模 | 公司称每日万亿 token并列组织。[S10] | 无独立测量、无按公司托管/自部署拆分 | 仅作为开源采用口径，不能当 ARR/客户数。 |
| 多硬件能力 | 硬件文档列多个平台。[S12] | 缺统一 benchmark、模型/版本/SLA 矩阵 | 不列为跨 XPU 调度平台；按目标硬件 POC 验证。 |
| Miles 的产权/上游依赖 | Miles 为 RadixArk 组织仓库，Apache-2.0 许可证版权写 Zhipu AI。[S4][S7] | fork、CLA、商标、改动归属和再许可安排未披露 | 投资/并购前做代码与权利链尽调。 |
| PD 分离的生产承载 | 文档给出 Mooncake/NIXL、router、健康检查和样例。[S3][S13] | 无 RadixArk 托管集群的客户级可靠性/成本数据 | 可列为 SGLang 功能，不可列为公司已验证服务收入。 |

## 八、来源审计表

| 编号 | 来源 | 等级 | 本报告使用边界 |
|---|---|---|---|
| S1 | [RadixArk 官网](https://www.radixark.com/)（访问于 2026-08-11） | 一手官网 | 公司使命、SGLang/Miles/托管基础设施定位。 |
| S2 | [RadixArk 隐私政策](https://www.radixark.com/privacy)（访问于 2026-08-11） | 一手法律页面 | `RadixArk, Inc.` 主体、平台/服务/支付与业务客户边界。 |
| S3 | [SGLang：PD Disaggregation 文档](https://docs.sglang.io/advanced_features/pd_disaggregation.html)（访问于 2026-08-11） | 一手技术文档 | PD 原理、Mooncake/NIXL、路由、RoCE/IB/NVLink 与部署限制。 |
| S4 | [Miles README](https://github.com/radixark/miles)（访问于 2026-08-11） | 一手代码仓库 | Miles 的 SGLang rollout + Megatron-LM 训练架构。 |
| S5 | [Miles Quick Start](https://miles.radixark.com/docs/getting-started/quick-start)（访问于 2026-08-11） | 一手技术文档 | 8 GPU 示例、GRPO、Ray、同置/解耦、权重同步。 |
| S6 | [SGLang Apache-2.0 LICENSE](https://raw.githubusercontent.com/sgl-project/sglang/main/LICENSE)（访问于 2026-08-11） | 一手代码许可 | SGLang 开源许可与版权主体描述。 |
| S7 | [Miles Apache-2.0 LICENSE](https://raw.githubusercontent.com/radixark/miles/main/LICENSE)（访问于 2026-08-11） | 一手代码许可 | Miles 许可证及 Zhipu AI 版权标记。 |
| S8 | [SGLang 论文，arXiv:2312.07104](https://arxiv.org/abs/2312.07104)（2023-12 提交，2024-06 修订） | 原始学术资料 | 起源、作者、系统机制与历史 benchmark；不外推到当前版本。 |
| S9 | [TechCrunch：SGLang 分拆为 RadixArk](https://techcrunch.com/2026/01/21/sources-project-sglang-spins-out-as-radixark-with-400m-valuation-as-inference-market-explodes/)（2026-01-21） | 权威媒体/匿名信源部分 | 团队、天使、早期收费线索；不取代官方融资/收入文件。 |
| S10 | [RadixArk：1 亿美元种子轮公告](https://www.radixark.com/blog/radixark-launches-100m-seed)（2026-05-05） | 一手公司公告 | 金额、估值、投资者、开源采用和产品规划；采用规模按公司口径。 |
| S11 | [SGLang 官网](https://www.sglang.io/)（访问于 2026-08-11） | 一手官网 | 推理定位、模型/硬件/优化项。 |
| S12 | [SGLang Hardware Platforms](https://docs.sglang.io/docs/hardware-platforms/overview)（访问于 2026-08-11） | 一手技术文档 | 多硬件平台入口，不代表所有组合生产等价。 |
| S13 | [SGLang Model Gateway 文档](https://docs.sglang.io/docs/advanced_features/sgl_model_gateway)（访问于 2026-08-11） | 一手技术文档 | gateway、worker 管理、可靠性、观测和安全功能。 |
| S14 | [Miles Training Backend 文档](https://miles.radixark.com/docs/user-guide/usage)（访问于 2026-08-11） | 一手技术文档 | Megatron 生产 backend、FSDP 实验性、并行限制和 SGLang 集成。 |
| S15 | [Miles Advanced Features](https://miles.radixark.com/docs/advanced)（访问于 2026-08-11） | 一手技术文档 | 低精度、MoE、P2P、LoRA 等功能列表，不作为客户证明。 |
| S16 | [Miles Core Concepts](https://miles.radixark.com/docs/user-guide/concepts)（访问于 2026-08-11） | 一手技术文档 | dataset/rollout/reward/actor/reference 的训练对象与循环。 |

## 九、产业链分类复核（报告末尾结论）

**主分类：`5.2 推理框架`（高置信）。** RadixArk 官网把 SGLang 置于公司推理产品的中心；SGLang 已公开面向 LLM/多模态推理的运行时、OpenAI-compatible API、模型/硬件支持、调度优化和生产网关文档。[S1][S11][S13] 公司融资公告也把 SGLang 作为其首要开源基础。[S10] 这最贴近其当前的技术优势、社区入口和潜在价值创造。

**次分类一：`4.2 推理PD分离`（中高置信）。** SGLang 文档明确实现并部署说明 PD 分离、prefill/decode worker、router、Mooncake/NIXL KV 传输与网络配置。[S3] 但 PD 是推理框架内的一项重要架构能力，而非公开证据显示的独立、主要收费产品，因此不宜升为主分类。

**次分类二：`5.3 分布式训练工具`（中高置信）。** Miles 公开集成 SGLang rollout、Megatron-LM 训练、Ray、NCCL/RDMA 权重同步和并行配置，且定位于大规模 RL/post-training。[S4][S5][S14] 它是公司第二条清晰产品线；但训练 backend 的核心仍依赖 Megatron-LM，Miles 公开历史较短且客户/收入尚未核验，故列为次要分类。

**不列入 `4.3 推理跨XPU异构调度`。** 多硬件文档可证明 SGLang 有 NVIDIA、AMD、Ascend、TPU、Intel XPU 等适配入口，但缺少跨 XPU 的统一调度语义、完整生产兼容矩阵、性能/SLA 和商业交付证据。[S12] 不应把“支持多硬件”夸大为已经成熟的跨 XPU 异构调度平台。

### 方法说明

本报告依横纵分析法，将 SGLang 的研究—开源—公司化演进，与推理运行时、PD 分离、托管服务和 RL 后训练的同期竞争结构交叉分析。重要结论以公开一手资料为主；对融资、客户、收入和 IP 不能由开源影响力直接证明的部分，均保留为尽调事项。
