# CAST AI

> Sources: 横纵研究报告，2026-08-11
> Raw: [CAST AI 横纵分析报告](../../raw/sources/2026-08-11-cast-ai-横纵分析报告-4.md)
> Updated: 2026-08-11

## Overview

CAST AI 是以 Kubernetes 工作负载资源画像、节点选择、rightsizing、bin-packing、扩缩、spot/on-demand 策略和重平衡为核心的应用性能自动化（APA）平台。其主价值在于把资源决策与执行持续嵌入客户既有集群，而不是出售 GPU、替代通用 Kubernetes 控制平面或提供模型推理运行时。对人形机器人公司，适合作为云端训练、评测、数据处理和非实时推理集群的可回滚 P0 采购验证对象；不应进入运动控制、安全闭环或设备端运行时。[来源：本页 Raw]

## 主体、产品与商业边界

报告以 CAST AI Group, Inc. 为研究主体。DPA 将其表述为为客户处理个人数据的 processor；这支持主体命名，但不能确认当前登记状态、关联实体、IP 归属、cap table 或全部销售合同的签约主体。[来源：本页 Raw]

公开产品把 workload rightsizing、智能扩缩、闲置资源清理、节点和实例选择、GPU sharing 及资源重平衡组合为自动化动作。平台的差异不只是成本可视化，而是获得权限后实际改变 Kubernetes 资源状态；因此价值和风险都取决于动作能否满足 SLO、可解释、可审计且可回滚。[来源：本页 Raw]

OMNI Compute 已公开描述将其他账户、私有云或自有基础设施的 GPU 节点通过 Crossplane、CRD 和 WireGuard 接入既有 Kubernetes 集群，并做 placement、sharing、GPU bin-packing、MIG/time-slicing 与成本归因。客户仍保留既有合同与 provider，且 onboarding 尚需人工支持；它是客户既有/已签约容量的接入与优化层，不是 GPU 供应商、统一采购结算平台或多厂商容量市场。[来源：本页 Raw]

## 机器人战略与行动

- **采购/合作：** 以非安全关键的模型评测、批量视频处理、异步推理或训练开发集群开展受控 PoC；与原生 Kubernetes/云工具、仅建议模式和受控自动化并行对照，验收资源利用率、单位有效成本、排队、尾延迟、spot 中断、作业恢复、人工 on-call 与回滚。
- **投资：** P1 战略观察，暂不启动财务投资立项。连续融资、Kubernetes 自动化产品和跨环境节点接入是正面信号；ARR/毛利、集中度、自动化启用率、实施成本、OMNI 覆盖与资本条款仍未闭环。
- **并购：** 不启动整体并购。其价值依赖跨云中立性、客户信任和持续服务；仅在我方长期运营大规模国际 Kubernetes GPU 集群、PoC 明显优于自建，且团队、IP、合同与控制面权利可取得时重评。
- **自研边界：** 保持训练/仿真优先级、数据与轨迹治理、边缘—云划分、确定性设备运行时、安全策略、合规和实验结果归因的自控；可采购节点优化、GPU sharing、rightsizing、spot 策略及部分跨云节点接入。

## 风险、反证与未知项

供应商关于节省、自动化和客户规模的陈述不能替代机器人工作负载的独立验收。云厂商和 Kubernetes 原生能力可内建相近功能，内部平台团队也可自建；复杂 stateful workload、跨云网络和人工 onboarding 可能使实施风险吞噬节省。DPA 的跨境处理与删除/返还条款也不能代替机器人视频、日志、模型权重的数据驻留与安全审计。

> **Status: Disputed**
> OMNI Compute 的公开架构支持“可将客户既有的跨环境 GPU 节点接入现有 Kubernetes 集群”的能力判断；但其人工 onboarding、未公开的供应/地域矩阵和缺失的端到端训练/推理基准，不支持将其写成规模化跨厂商训推调度主业务或多来源算力资源池化与控制面。[来源：本页 Raw]

关键尽调事项包括主体/IP/合同关系，agent 的 Kubernetes RBAC 与 secrets/metadata 可见性，WireGuard 网络和远程节点隔离，故障时的 fail-open/fail-closed，动作审批/回滚/审计，数据留存和退出迁移，以及 OMNI 的可复制性和真实生产 SLO。详见 [CAST AI关键尽调问题](../questions/CASTAI关键尽调问题.md)。

## 分类

- 主类型：[3.5 调度与编排软件](../segments/3.5-调度与编排软件.md)（高置信）：客户购买的是 Kubernetes 集群中资源的持续决策与执行，而非单纯账单可视化。
- 次类型：[3.6 集群管理软件](../segments/3.6-集群管理软件.md)（中高置信）：平台连接、观测与优化多种 Kubernetes 环境；但差异化仍是调度/优化，不能倒置为主分类。
- 观察性次级能力：[4.1 跨厂商训推算力调度平台](../segments/4.1-跨厂商训推算力调度平台.md)（中等置信，仅限 OMNI Compute）：已有跨环境 GPU 节点接入与 placement/sharing 的公开架构，尚未证明独立、规模化的端到端训推调度。
- 不列入：4.4 多来源算力资源池化与控制面；公开材料显示用户保留原有合同与 provider，未见统一采购、结算、履约保证或容量市场。

