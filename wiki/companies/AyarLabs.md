# Ayar Labs

> Sources: 本地横纵研究报告，Unknown
> Raw: [Ayar Labs 横纵分析报告](../../raw/sources/2026-08-11-ayar-labs-hv-analysis-report-4.md)
> Updated: 2026-08-11

## Overview

Ayar Labs 是共封装光学（CPO）与光 I/O chiplet 公司：TeraPHY™ 通过 UCIe 集成至 XPU 或交换芯片封装附近，SuperNova™ 提供外置多波长光源。其面向 AI Scale-up 的价值是以光纤缓解铜互连的带宽、距离与功耗约束；它不是 GPU、NPU、光学矩阵计算芯片，也不是独立的电信光模块或完整网络设备供应商。

## 业务与分类

- **主分类：**`1.8 Scale-up互联通信`。TeraPHY 光 I/O 与 SuperNova 的客户购买理由是封装附近的带宽、时延、功耗、连接距离和可集成性；公开资料显示其 UCIe 接口和 CPO 参考设计直接服务于加速器/ASIC 的 Scale-up 域。
- **不设正式次分类：**不列 `1.9 Scale-out互联通信`。跨机架连接能力与 Wiwynn 联合架构不构成 Ayar 独立提供交换、路由、拥塞控制、拓扑、SLA 或网络运营交付的证据。
- **不设正式次分类：**不列 `1.5 光子/光电计算芯片`，因为硅光器件用于通信与数据搬运，并不执行光学矩阵运算；也不列 `3.1 光通信`，因为公开收入承载物是封装级 AI Scale-up I/O，而非独立可外售的电信传输系统。

## 产品、商业化与生态

TeraPHY 的披露规格包括最高 8Tbps 双向带宽、10ns/chiplet 延迟（不含光纤飞行时间）、BER <1e-12、UCIe 和 8 个全双工 optical port；报告同时保留其规格为 preliminary、细节受 NDA 限制的条件。SuperNova 提供外置多波长光源，意在把激光从高热封装区移出并改善服务性。

公司称 2022 年已有按合同进行的 volume commercial shipments，2026 年已出货多代 TeraPHY、部署数千个 optical engine；这些是持续产品化的公司披露，不能替代收入、毛利、良率、每客户部署量或具名订单证据。2026 年 Series E 为 5 亿美元，投后估值 37.5 亿美元、累计资金 8.7 亿美元；融资可支持量产测试与生态建设，但不是销售或量产良率的证明。

GlobalFoundries、Lumentum、GUC、Wiwynn、NVIDIA NVLink Fusion、Alchip/MediaTek 分别覆盖硅光、外置光源、封装/ASIC、机架与生态入口。GUC 的超过 100Tbps full-duplex 光接口和 Wiwynn 的超过 1,024 个 AI accelerator 架构均属于参考设计或联合工程目标；NVIDIA 生态兼容亦不等于 NVIDIA SKU、采购承诺或客户订单。

## 面向人形机器人的动作

- **投资/并购：**当前以追踪为主，不建议直接投资或并购。客户、收入、订单、可靠性与量产良率仍不透明，且其产品依赖 foundry、光源、封装、ASIC 和 ODM 的共同交付。
- **采购/合作：**不直接采购；仅在公司自建数千 GPU 以上集群且跨机架 Scale-up 的带宽或功耗成为明确瓶颈时，经服务器、ASIC 或网络伙伴评估具备 Ayar CPO SKU 的方案。
- **自研：**优先自研集群拓扑、通信与可观测性，不自研 CPO；只有成为定制 XPU/ASIC 买方后，再考虑 CPO 架构协同设计。

## 风险、反证与未知项

| 事项 | 已有证据 | 限制与下一步 |
|---|---|---|
| 商业化与量产 | 有合同发货、多代出货和 optical engine 部署的公司披露。 | 缺少收入、客户、订单金额、良率、复购与保修数据；应区分已资格认证、评估、共同开发和量产客户。 |
| 性能与采购适用性 | 官方页面有带宽、时延、BER 与效率主张。 | 基线、系统配置、距离、协议、TCO、MTBF、RMA 与现场服务细节不足；应在同拓扑下复测。 |
| 生态关系 | 有投资、兼容、共同设计和参考架构。 | 不应将战略投资、NVLink Fusion、GUC/Wiwynn 合作写成设计 win、量产 SKU、完整网络或客户订单。 |
| 供应链 | 外置光源、硅光、封装和机架伙伴均有公开线索。 | 实际产能、价格、良率、备供、最低采购和独家安排未公开，应在尽调中核验。 |
