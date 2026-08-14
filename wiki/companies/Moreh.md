# Moreh

> Sources: 本地横纵研究报告, 2026-08-11；SEC EDGAR, 2023-09-14
> Raw: [Moreh 横纵分析报告](../../raw/sources/2026-08-11-moreh-横纵分析报告.md)；[Moreh 工商主体核查](../../raw/sources/2026-08-11-Moreh工商主体核查.md)
> Updated: 2026-08-11

## 概览

Moreh, Inc. 是一家以异构加速器 LLM 推理软件为当前交付重心的公司：其公开产品组合包括 Moreh vLLM、定制 kernel／库、MoAI Performance Gateway、MoAI Fabric 和 MoAI Inference Framework。其可观察的差异化是 AMD GPU、Tenstorrent 加速器及部分 NVIDIA／AMD 混合环境的后端优化、推理服务和跨厂商 Prefill/Decode（PD）协作；生产客户、硬件组合覆盖、故障语义和大规模稳定性尚未充分公开。SEC 文件可确认 Moreh, Inc. 为 Delaware Corporation，成立年份为 2021；本页不与同名的中国 Chiplet／封装设计主体混同。

## 主体、产品与商业边界

- Moreh 的公开定位是“Inference software company”。其产品声明覆盖异构资源配置、按请求长度路由、PD 解耦、自动扩缩，以及跨厂商 KV cache 的格式、数据类型／量化和并行布局转换。
- Moreh vLLM for AMD 的公开主张涵盖定制 GEMM／attention／MoE 库、图级执行、量化和多 GPU 优化。网页所列支持模型、硬件和“最高约 2 倍吞吐”均属厂商配置和基准口径，不应外推到其他模型、上下文、并发、版本或集群规模。
- 2021—2023 年的 KT Cloud 商业化、基础设施交付和累计收入超过 400 亿韩元，均为公司自述；无审计报表、合同、收入拆分或回款资料，因此不能写作可审计的软件收入或持续客户订单。
- 2023 年公开材料披露 KT 与 KT Cloud 合计投资 150 亿韩元，以及 2,200 万美元 Series B、累计融资 3,000 万美元的口径。两项可能属于同一轮或阶段性披露，不得机械相加。

## 产业链定位

- **主分类：5.2 推理框架/引擎/运行时（中高置信）。** Moreh vLLM、MoAI Inference Framework、推理网关和运行时产品线对标推理执行软件；独立软件交付、客户和生产 SLA 仍须核验。
- **副分类：2.2 AI 算子开发、迁移与适配（中等置信）。** 芯片专属 kernel、GEMM／attention／MoE、量化和 vLLM compute backend 适配，是其将既有模型／框架迁移到 AMD、Tenstorrent 等加速器的关键能力。
- **条件性副分类：5.5 推理及训练运行时优化（C/S，需按合同拆分）。** 只有客户购买的是后端优化、KV cache、性能网关或长期优化支持，而非单纯托管推理结果时才成立。
- **条件性副分类：5.5 推理及训练运行时优化（C/S，需按合同拆分）。** 只有客户购买的是后端优化、KV cache、性能网关或长期优化支持，而非单纯托管推理结果时才成立。
- **不列入 2.1 或 5.3。** “类似 CUDA”的历史媒体描述不能满足加速计算平台准入条件；Tenstorrent 联合方案中出现训练主张，但没有公开的版本化训练产品、客户或可复现交付证据。

## 投资、并购与机器人协同判断

- **合作／采购：条件性 PoC。** 以明确的 VLA、视觉语言模型或云端推理负载，与 NVIDIA TensorRT-LLM／vLLM、AMD ROCm vLLM／SGLang 基线及 Moreh 方案同条件比较。混合 PD 先在隔离环境验证 KV cache 数值一致性、长上下文、网络失败与重试语义，不接入生产机器人控制流。
- **投资：观察。** 触发条件包括可访谈的付费推理客户、可审计的软件收入与续费、目标模型上的跨厂商生产 SLA、核心 kernel／Fabric IP 与开源义务边界，以及 Tenstorrent 联合方案的实际商业化。
- **并购：暂不建议。** 价值主要在软件人才、芯片后端优化和可能的异构推理控制面；在客户合同、开源许可证、关键人才留任和实际生产成本优势未核实前，不支付控制权溢价。
- **自研边界：**保留自有 model-serving API、可观测性、压测集、模型与数据治理及硬件回退策略；外采优化须支持可迁移容器／权重和不使用 Moreh 时的故障回退。

## 冲突与不确定性

> **Status: Disputed**
> Moreh 与 Tenstorrent 的联合方案提到 training＋inference，但 Moreh 当前官网定位为 inference software，且没有公开的训练框架文档、客户或复现证据。本页将训练能力保留为待验证方向，不按分布式训练工具归类。

- 跨厂商 Fabric、Gateway 与 PD 解耦是公司产品主张；尚无足以证明任意芯片、模型、网络条件下生产 SLA 的公开资料。
- SGLang 联合展示、AMD／KT 投资和 Tenstorrent 战略合作分别只支持技术协同、资本关系或 PoC 线索，不支持客户订单、收入分成、排他或长期支持义务。
- 法人、IP 与地域仍须穿透韩国／越南实体、知识产权许可、雇佣关系、开源合规、跨境数据和出口合规。

## 关键尽调与验证计划

- 在 8—12 周 PoC 中固定模型提交、量化、并发、输入／输出长度、GPU firmware、ROCm／CUDA 版本和网络，测量 tokens/s、首 token、P99 inter-token latency、端到端成功率、精度、故障恢复、自动扩缩、成本、版本回滚和审计隔离。
- 取得合同主体、软件／云／集成收入拆分、客户验收与续费，以及核心代码、开源许可证和可转移 IP 的权属资料。
- 逐 SKU 验证 NVIDIA／AMD／Tenstorrent 的 KV cache 转换正确性、性能回归、失败切换、可观测性与供应商支持 SLA。
