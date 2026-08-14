# Parallel Domain

> Sources: 横纵研究报告，2026-08-11
> Raw: [Parallel Domain 横纵分析报告](../../raw/sources/2026-08-11-parallel-domain-横纵分析报告.md)
> Updated: 2026-08-11

## Overview

Parallel Domain Inc. 将客户的 drive、flight 或仓库捕获日志重建为可复用的数字 Replica，并在其上提供可决定、可变参的 camera、lidar、radar 仿真、标签与质量报告。其主类型归入 [7 数据服务](../segments/7-数据服务.md)：客户购买的是由真实日志衍生、可用于训练、验证和评测机器感知系统的数据与测试资产，而非通用训练框架、推理框架、集群调度或机器人模型。对人形机器人公司，建议先在低敏感场地开展受控 PoC；投资列入观察，并购不作为当前主路径。[来源：本页 Raw]

## 主体、路线与产品

报告研究主体为 Parallel Domain Inc.。公司称其于 2017 年成立，并在美国旧金山、德国 Karlsruhe 与加拿大 Vancouver 布局团队；创始人 Kevin McNamara 在 CEO 交接后转入产品、工程及客户工作，Zack Novak 于 2026-03-19 加入为 CEO。成立的精确法定日期、团队履历与组织边界仍须以注册和雇佣资料核验。[来源：本页 Raw]

公司称约一年前进行了从多年程序化环境创建转向可扩展真实场景重建的“bet-the-company”调整。PD Replica 以 camera、lidar、GPS 等 capture logs 生成静态/动态环境、物理/碰撞层、语义与实例标签、HD map，以及可变化的 actor；PD Sim 提供 camera、lidar、radar 的多传感器仿真、Python SDK、参数模板、并行执行与 CI/CD 集成。上述为公司产品主张，尚不是跨传感器、跨场景的独立性能认证。[来源：本页 Raw]

## 商业关系与数据边界

官网列 Foundry、Costanoa、Calibrate、Ubiquity、Toyota Ventures、March Capital 等为投资者，但公开材料未披露融资金额、轮次、估值、持股、董事席位或控制权。主页展示 Google、Zenseact、TRI、Woven、Humble 等 logo，只能证明公司公开宣称的关联，不能作为订单、收入、排他合作或生产使用量证据。与 Foretellix 的公开合作可证明双方拟整合场景验证、digital twin 与 sensor simulation，不证明共同客户、商业条款、数据共享或排他性。[来源：本页 Raw]

PD Replica 依赖客户提供的日志，因而原始 logs、重建的几何/纹理/map、标签、场景变化、传感器输出和测试结果的权属不能被默认推定。采购前应把处理者角色、模型训练许可、存留与删除、跨境/区域驻留、分包访问、导出和终止协助逐项写入合同。相关开放问题见 [Parallel Domain关键尽调问题](../questions/ParallelDomain关键尽调问题.md)。[来源：本页 Raw]

## 机器人适配、投资与行动建议

其较适合已有连续日志、传感器 rig 与重复运营环境的感知验证：可将真实场地变为可复现并可改变的回归资产。它不能单独解决人形机器人的接触动力学、手部操作、人机交互、长序列行为或安全论证；“quality report”与“sensor matches reality”均须用目标传感器和 held-out real logs 验证。[来源：本页 Raw]

建议以一个低敏感仓库/工厂区域进行采购型 PoC，比较真实与模拟数据上的检测、跟踪、占据、延迟、回归发现率及每个有效测试成本；并保留采集、ontology、标定、数据版本与最小仿真基线的内部控制。战略合作优先于股权：先约定数据不用于他客户/模型训练、资产归属、私有部署和退出可导出性。投资需取得审计收入、续约、产品线毛利、部署模型、客户参考和 cap table；只有在关键团队、可转让 IP、客户同意及场地资产权利均明确时，才评估小范围资产或人才交易。[来源：本页 Raw]

## 分类

- 主类型：[7 数据服务](../segments/7-数据服务.md)（中高置信）：产品把客户真实 logs 转化为 Replica、带标签的多传感器仿真输出、可变场景和质量报告，核心价值是训练、验证与评测机器感知系统的数据/测试资产。
- 不设正式次分类：公开资料没有通用训练、分布式训练、LLM serving、RAG/知识库编排或 VLA/世界模型产品的证据。物理 AI 仿真/验证属性是条件观察项，等待稳定分类差异后再拆分。
