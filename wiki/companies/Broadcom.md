# Broadcom

> Sources: 本地横纵研究报告，Unknown
> Raw: [Broadcom 横纵分析报告](../../raw/sources/2026-08-11-broadcom-hv-analysis-report-4.md)
> Updated: 2026-08-11

## Overview

Broadcom 是以 Ethernet 交换/路由 silicon、NIC、PHY、光连接组件、定制 ASIC 与企业基础软件为核心的大型上市基础设施技术公司。对人形机器人公司的 AI 基础设施决策，其最可验证的价值在于开放 Ethernet Fabric 的供应链与定制硅实现能力，而非通用 GPU 或面向开发者的加速计算平台；VCF 可作为私有云候选，但不自动构成训练平台。

## 业务与分类

- 主分类：**`1.9 Scale-out互联通信`**。跨服务器、跨机架与跨站点的 Ethernet switching/routing silicon、NIC、PHY 与光连接组件是报告中最稳定、可验证且对应价值创造的产品组合。
- 次分类：**`1.8 Scale-up互联通信`**。高速 SerDes/IP、NIC、PHY 与面向客户规格的 ASIC/HBM/先进封装整合，也服务于加速器、服务器节点和机架内的数据移动。
- 不列为通用 AI 加速器或 CUDA-like 平台：客户定制 XPU 并非面向一般客户、可独立验证的通用加速器产品族；公开材料也未提供跨代 XPU runtime、compiler、算子接口与主流框架后端的完整证据。VCF 是私有云基础软件，不是 GPU 集群主调度器或机器人实时控制系统。

## 经营边界与可验证披露

- **软件并购边界：**Broadcom 于 2023-11-22 完成 VMware 收购，VMware 经营结果随后并入 Infrastructure Software 分部。该事实不将 VMware 历史客户、软件收入或技术资产自动归因于 AI 网络业务。
- **收入口径：**FY2025 总收入为 638.87 亿美元，Semiconductor Solutions 为 368.58 亿美元、Infrastructure Software 为 270.29 亿美元。FY2026 Q2 的 AI semiconductor revenue 为 108 亿美元，管理层预测 Q3 约为 160 亿美元；前者同时受定制 AI 加速器与 AI 网络驱动，后者是预测，均不能拆作单一 ASIC、网络产品或客户的已实现收入。
- **客户集中：**一名未具名客户占 FY2025 净收入 32%，前五终端客户约占收入 40%，分销商占总收入 48%。这提示议价和供应风险，但不构成该客户身份、其内部加速器或订单金额的公开确认。
- **交付边界：**官方产品目录确认 Ethernet switching / switch fabric devices 与 StrataXGS 产品线存在。交换 ASIC 不是完整 AI 网络；NOS、NIC、光模块、RoCE/拥塞控制、遥测、SLA、RMA 与现场支持须由具体系统方案验证。

## 面向人形机器人的动作

- **采购/合作：**以冻结的 VLA、视觉或视频训练工作负载，将 Broadcom ASIC 生态 Ethernet Fabric 与 NVIDIA 系统化 Ethernet/InfiniBand、Cisco 或现有方案放在同一拓扑进行 POC。验收覆盖有效样本吞吐、99p 作业尾时延、PFC/ECN/RoCE 故障恢复、光链路误码、升级与运维工时，并把 BOM、NOS、NIC、光模块、支持边界和 RMA 写入合同。
- **定制 ASIC：**仅保留战略预研与供应商尽调。进入量产前须同时确认负载稳定、需求规模足以覆盖 NRE、HBM/封装/代工供给、软件维护能力以及第二来源或 GPU 回退路径；Broadcom 只能是候选实现伙伴。
- **投资/并购：**不建议以取得技术或控制权为目的投资或并购 Broadcom。更现实的资本目标是其供应链中可拆分、可验证且与机器人需求匹配的中小型标的。

## 风险、反证与未知项

| 事项 | 已有证据 | 限制与下一步 |
|---|---|---|
| 定制 ASIC 的商业质量 | 公司披露按客户规格提供定制 ASIC/XPU 平台，且 AI 半导体收入同时受加速器与网络驱动。 | 未披露客户身份、芯片架构、订单、价格或 ASIC/网络收入拆分；只接受双方公告、合同或审计材料。 |
| Ethernet Fabric 的可运营性 | 交换/路由、NIC、PHY 和光组件产品线持续存在。 | 不能从 ASIC 推出 NOS、拥塞控制、光链路、SLA 或现场支持质量；须以目标拓扑 POC 复现。 |
| VMware/VCF 协同 | VCF 覆盖 VM、容器、网络、存储、管理和安全。 | 私有云能力不等于 AI 训练平台效果；须验证具体版本、GPU/网络、权限、迁移与 TCO。 |
| 供应与集中度 | FY2025 一名客户占净收入 32%，前五终端客户约占收入 40%。 | 客户未命名，且集中度无法揭示特定产品的可替代性或合同保障；采购应单列产能、交期、出口合规和 EOL 条款。 |

## 冲突与不确定性

市场常把客户自研加速器、Broadcom 定制 ASIC 与特定云厂订单合并叙述，但本次原始资料只确认产品能力与匿名集中度，不确认逐客户项目。AI semiconductor revenue 也未拆分 ASIC 与网络。相关 P0 尽调问题见 [Broadcom关键尽调问题](../questions/Broadcom关键尽调问题.md)。
