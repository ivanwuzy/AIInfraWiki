# Cloudera

> Sources: 横纵研究报告，2026-08-12
> Raw: [Cloudera（Taikun 业务线）横纵分析报告](../../raw/sources/2026-08-12-cloudera-taikun-business-line-hv-analysis-report.md)
> Updated: 2026-08-13

## Overview

Cloudera, Inc. 是企业数据平台、AI 服务与混合云运行环境的软件供应商。其于 2025-08-04 收购 Taikun；收购后 Taikun 的多云 Kubernetes／云基础设施管理能力成为 Cloudera 的产品线，而不是可独立估值、独立采购或倒推至 Cloudera 历史业务的主体。对人形机器人公司，它是“数据平台加多环境部署控制面”的有条件采购候选，不是基础模型、具身数据采集、训练芯片或跨 XPU 训练／推理调度标的。[来源：本页 Raw]

## 主体、产品与边界

报告以 Cloudera, Inc. 为研究对象。Cloudera 于 2008 年成立，2018 年公布并在 2019 年完成与 Hortonworks 的合并；2021 年由 CD&R 与 KKR 以约 53 亿美元交易私有化。私有化后缺少公开季度财务，故不能把产品发布、合作或收购直接等同于新增收入、客户留存或商业化强度。[来源：本页 Raw]

2025-08-04 的 Cloudera 公告称交易为 “acquisition of Taikun”，并称 Taikun 工程团队加入 Cloudera、其捷克团队成为欧洲开发中心。报告所引的当前产品页和文档显示，Taikun 品牌／文档已迁入 Cloudera 产品线，现行名称为 Cloudera Cloud Factory。该证据支持收购后产品与团队归属，但未公开交易价格、法定收购载体、旧股东、合同转让、独立 SKU、独立收入或客户迁移状态。[来源：本页 Raw]

Cloud Factory 的可见产品面包括 Kubernetes 与云基础设施的创建、导入、访问、升级、监控、备份、审计、项目／租户、配额、showback、应用部署，以及 API、CLI 和 Terraform 接口；文档覆盖公有云、私有云与部分既有集群环境。它证明存在版本化的集群管理产品，不能证明所有支持组合已经在客户生产环境得到验证，也不能把多云管理写成跨 XPU 运行时、GPU 容量销售或推理路由能力。[来源：本页 Raw]

## 机器人战略与行动

- **采购／合作：** 仅在已使用或计划使用 Cloudera、且同时存在公有云与本地／私有／隔离环境时，开展可退出 PoC。测试同一项目下的权限、审计、配额、使用报告、GPU device plugin、对象存储、消息队列、模型服务、升级回滚与节点恢复；以 Cloud Factory、Rancher/OpenShift 和云原生托管 Kubernetes 做三年 TCO 对照。[来源：本页 Raw]
- **投资／并购：** 不对 Taikun 发起财务投资或整体并购，它已被 Cloudera 收购。Cloudera 是成熟私有平台公司，Cloud Factory 独立收入和整合成效未公开；仅在出现可剥离资产、区域渠道或核心团队机会时，以 IP、雇佣／竞业、开源许可证、客户合同转让及出售授权重新立项。[来源：本页 Raw]
- **自研边界：** 不自研 Kubernetes 发行版或通用多云控制面；保留机器人任务队列、数据血缘、仿真与真实数据版本绑定、具身评测门槛、边缘设备 fleet policy，以及与训练／推理 SLO 关联的资源策略。合同应保留 API、Terraform、配置与数据导出、漏洞修复、支持 SLA 和退出迁移条款。[来源：本页 Raw]

## 风险、反证与未知项

云厂商的 EKS、AKS、GKE 在单云环境具有 IAM、网络、托管服务与计费集成优势；OpenShift、Rancher 与 Tanzu 则分别受企业发行版、多集群管理和既有虚拟化存量驱动。Cloud Factory 的多环境能力只有在多地点、主权或隔离环境以及 CDP 部署相邻的需求下，才有明确的采购理由；单一公有云环境不应为了统一平台额外引入控制面。[来源：本页 Raw]

收购公告、域名迁移、产品页和 Cloud Factory 文档共同支持归属关系已确认；但这些材料不披露收购协议、法定收购实体、旧 Taikun 股权结构、合同转让或独立业务收入。法律资产边界与商业承接仍须尽调。[来源：本页 Raw]

关键缺口包括 Cloud Factory 是否有独立 SKU、价格、续费和非推荐客户；收购后身份、审计、策略、计费和支持是否与 CDP 统一；跨云导入、升级、灾备、air-gap 及 GPU 节点的真实支持矩阵；以及旧 Taikun 客户是否已转入 Cloudera。详见 [ClouderaTaikun收购范围与商业化尽调](../questions/ClouderaTaikun收购范围与商业化尽调.md)。

## 分类

- 主类型：[3.6 集群管理软件](../segments/3.6-集群管理软件.md)（中高置信）。产品的核心交付是 Kubernetes 与云基础设施生命周期控制面，而非 GPU／XPU 容量、模型 API 或数据服务。
- 不列正式次类型。当前证据不足以将其归入 3.5 调度与编排软件或 4.4 多来源算力资源池化与控制面；更不支持 4.1 跨厂商训推算力调度平台或 4.3 推理跨 XPU 异构调度。

