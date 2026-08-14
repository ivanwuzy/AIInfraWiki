# Anyscale

> Sources: 横纵研究报告，2026-08-11
> Raw: [Anyscale 横纵分析报告](../../raw/sources/2026-08-11-anyscale-横纵分析报告.md)
> Updated: 2026-08-11

## Overview

Anyscale, Inc. 将 Ray 的数据处理、分布式训练、服务与集群控制能力产品化为专有 SaaS Platform Services，提供 Hosted、BYOC、按量计费、承诺合同和企业 SLA。主分类为 5.3 分布式训练工具（中等置信）；3.5 调度与编排软件为次类型，不列 5.2 推理框架。对人形机器人公司，现实价值是以可替换的控制面组织多模态数据、仿真、训练、批量推理与模型服务；不应把 Ray 的开源采用或客户案例直接视为 Anyscale 的收入、可迁移资产或我方 TCO。[来源：本页 Raw]

## 主体、开源边界与产品

报告以 Anyscale, Inc. 为研究主体；其条款把 Platform Services 定义为专有 SaaS，并以订单界定服务交付。Ray 起源于 UC Berkeley RISELab，现由 PyTorch Foundation 治理；Anyscale 是创建团队的商业公司和重要维护者，但不当然拥有 Ray 的所有采用、贡献、客户或代码。[来源：本页 Raw]

平台把 Ray Data、Train、Tune、Serve、RLlib 与 Core 的能力组织为受管运行时、工作空间、日志、可观测、自动扩缩、A/B rollout 和集群管理。公开产品范围还包括多云/多区域、Kubernetes 或 VM、优先级队列、GPU 池化、预算、SSO/SAML/SCIM、审计日志与使用归因。Hosted 使用其托管基础设施；BYOC 可部署于客户自有云或 on-prem，并可使用 VM 或 K8s。[来源：本页 Raw]

## 商业与机器人适配

2020-10-21，公司公告了由 NEA 领投的 4,000 万美元 Series B，并称累计融资超过 6,000 万美元；a16z、Foundation Capital 与 Intel Capital 参与。该公告提及的 Ray 使用者不应认定为 Anyscale 付费客户或订单。[来源：本页 Raw]

Physical Intelligence 与 Bedrock Robotics 为官网公开案例，支持其在机器人多模态数据、标注、训练、部署与队列调度场景中的客户/使用关系线索。案例中关于 16+ 研发人员、每天 TB 级数据、170 万 compute hours、80% spot、40% 成本下降或 15,000 次 spot interruption 的表述均属于供应商/客户案例口径，未见独立审计，不能外推为所有客户效果或我方验收指标。[来源：本页 Raw]

建议先在自有 VPC/保留 GPU 上开展 8—12 周 BYOC PoC，将 MCAP、视频或 LiDAR 数据处理、标注、训练和离线评测与自建 Ray + Kubernetes/Slurm 对照；验收应覆盖吞吐、收敛、启动时间、GPU 利用率、故障恢复、工程人天、全周期 TCO、数据驻留和退出能力。[来源：本页 Raw]

## 投资、并购与风险

2026-07-30，Anyscale 宣布签署加入 Nscale 的 definitive agreement；报告仅确认其为待交割协议，不确认已完成收购、控制权变更、GPU 容量、优惠价格或技术整合。交易可能改善算力协同，也可能削弱多云中立性；交割、对价、合同承接、Ray 治理、收入拆分、续费、区域和中国交付均为交易前置尽调项。[来源：本页 Raw]

当前建议是不整体并购，也不以 Ray 采用度为基础投资；先完成受控 PoC 和尽调。自研/自持边界应包括作业定义、数据与模型元数据、机器人仿真与安全评测、成本账本、供应商无关的可观测及部署导出接口。详见[Anyscale关键尽调问题](../questions/Anyscale关键尽调问题.md)。

## 分类

- 主类型：[5.3 分布式训练工具](../segments/5.3-分布式训练工具.md)（中等置信）：Platform 将分布式模型训练、弹性扩缩、训练可观测、Ray Train 和 post-training 作为可运行工作负载，并提供 Hosted/BYOC/on-prem 交付；但 Ray Train 是开源组件，收入、客户规模与独立训练效率未披露。
- 次类型：[3.5 调度与编排软件](../segments/3.5-调度与编排软件.md)（较高置信）：公开平台能力包含跨云/区域、K8s/VM、优先级调度、队列、GPU 资源池和自动扩缩。
- 不设 5.2：Ray Serve 与平台覆盖 online/batch inference、vLLM/SGLang 接入和模型部署，但其定位更接近服务编排/运行平台，而非专用推理内核或引擎。

