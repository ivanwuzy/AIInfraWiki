# AWS

> Sources: 本地横纵研究报告，Unknown
> Raw: [Amazon Web Services（AWS）横纵分析报告](../../raw/sources/2026-08-11-amazon-web-services-aws-hv-analysis-report.md)
> Updated: 2026-08-11

## Overview

AWS 是以全球数据中心、云控制面、定制硅与 Neuron 软件栈交付计算、存储、数据库、网络和 AI 服务的超大规模平台。其直接商品是按量或承诺计费的实例、集群容量、托管模型接口与 SLA，而非将 Trainium 或 Inferentia 芯片作为可由客户取得所有权的独立商品出售。对人形机器人公司，它是可受控采用的云采购/合作对象和 GPU 的第二算力路径候选，但不是常规的投资或并购标的。

## 业务边界与路线

- **主体与财务边界：**Amazon Web Services, Inc. 是 Amazon 体系内法人；公开披露中的 AWS 是报告分部，不能将其与单一法人、Amazon 集团资本开支、Anthropic 的投资或任何单一 AI 产品收入互换。报告明确指出 AWS 不独立上市，也没有独立对外融资或独立 VC 股东的证据。
- **系统性能力：**AWS 将 Nitro、Graviton、Inferentia、Trainium、EFA、VPC、存储、容器、计量和支持组合为云服务。Inf1/Inf2 与 Trn1/Trn2/Trn3 是以实例/集群方式交付；公开产品页可证明服务存在，不能证明目标 Region 的即时容量、配额、价格、拓扑或 SLA。
- **软件与上层服务：**Neuron 包含 runtime、compiler、框架集成、性能工具、NeuronX Distributed 与 NKI 自定义内核接口；SageMaker 和 Bedrock 将训练、部署及生成式 AI 的部分复杂性包装为托管服务。此类入口不消除 CUDA 迁移、算子覆盖、模型版本、数据权属和退出成本。

## 产业链分类

- 主分类：**[8.1 云与 AI 算力服务](../segments/8.1-云与AI算力服务.md)**。AWS 的价值创造和分部披露均以云服务为承载，不能因自研 AI ASIC 存在而将其主分类写成芯片或独立互联供应商。
- 次分类：**`1.3 NPU（ASIC）`**。Trainium 与 Inferentia 是以云实例交付的训练/推理专用 ASIC；这不代表其以独立售芯片取得收入。
- 次分类：**`2.1 加速计算平台（CUDA-like）`**。报告基于跨代 SDK、运行时、编译器、框架后端、分布式库、工具与 NKI 扩展接口，判断 Neuron 满足本库的平台化准入条件；该标签不等同于 CUDA 的生态宽度或迁移体验。
- 不列 `1.8 Scale-up互联通信`：EFA 与 NeuronLink 是云上训练系统能力，而非客户主要采购、可独立计价的互联产品收入主线。

## 面向人形机器人的动作

- **采购/合作：**以冻结的 VLA、视觉或视频工作负载，比较 GPU 与 Trainium/Inferentia 的收敛、有效吞吐、墙钟、失败重试、工程人日、总账单和迁出成本；在合同中确认 Region、容量、支持、价格、数据与 checkpoint 导出以及模型变更条款。
- **生产边界：**Bedrock/Anthropic 可用于研发、知识库和非安全关键 agent；安全关键闭环控制、断网回退、现场数据治理与跨云复现能力应保留在自有可审计系统。
- **投资/并购：**不建议将 AWS 本身作为常规投资或并购对象。若未来出现可独立交易的软件团队、区域资产或供应链资产，需另行核验 IP、控制权和可交易性。

## 反证、风险与未确认事项

| 事项 | 支持证据 | 反向证据/未知项 | 下一步 |
|---|---|---|---|
| Trainium/Inferentia 可作为第二路径 | 多代实例、Neuron 软件栈和公开的 Anthropic 商业安排显示该路线持续存在 | 未披露外部收入、客户数、租用小时、利用率、真实成本或目标负载表现 | 用同一机器人训练/推理配方完成受控 POC，不以厂商性能主张外推 TCO。 |
| Neuron 可降低迁移门槛 | 已有 runtime、compiler、框架和 NKI 扩展入口 | CUDA 的库、工具、社区与可移植性仍更广；特定算子/版本/稳定性未获本报告验证 | 对自有 kernel、视觉/视频管线与 checkpoint 逐项验证。 |
| Amazon—Anthropic 关系 | 报告记录了 Amazon 的金融投资和 AWS 云/芯片使用商业安排 | 不构成 AWS 控制 Anthropic、独家订单、AWS 收入或实际芯片用量证明 | 合同层面分别核验模型供应、数据权属、SLA、价格与退出权。 |

## 冲突与不确定性

任务追踪清单此前把 AWS 暂列为 `1.2 TPU-like 张量 ASIC；1.8 Scale-up互联通信`。本报告的分类复核认为该口径把云服务收入承载物与其内部/云内技术混同，因此已改为主 `8`、次 `1.3` 与 `2.1`；对 EFA/NeuronLink 不设 `1.8` 标签。该调整基于本次报告，尚未有独立的产品收入、客户规模或 TCO 数据可将 AWS 的自研芯片业务单独量化。
