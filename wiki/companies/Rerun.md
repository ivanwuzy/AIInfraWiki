# Rerun

> Sources: 横纵研究报告，2026-08-11
> Raw: [Rerun 横纵分析报告](../../raw/sources/2026-08-11-rerun-横纵分析报告.md)
> Updated: 2026-08-11

## Overview

Rerun Technologies AB 将开源多模态数据记录、可视化与查询工具延伸为面向 Physical AI 的数据层：客户可用 SDK、`.rrd`、Viewer、catalog、SQL/dataframe、数据变换及训练读取接口处理自有数据。主分类为 [7 数据服务](../segments/7-数据服务.md)（中高置信）；它不公开销售训练数据、提供标注外包或训练模型。对人形机器人公司，建议以本地／自托管的开发和评测数据诊断 PoC 为 P0，Hub 只在安全与商业控制面核验后再扩大使用。[来源：本页 Raw]

## 主体、产品与边界

报告以隐私政策和网站版权将主体锚定为 Rerun Technologies AB，但未核验公司登记、关联主体、IP 归属、cap table、客户合同实体或云服务数据处理主体。Rerun 的公开产品层须分开看待：开源 SDK、Viewer、Server 与 `.rrd` 数据格式；围绕 catalog、SQL/dataframe、dataset review 与 dataloader 的数据层能力；以及处于 private preview 的商业 catalog/storage engine Rerun Hub。[来源：本页 Raw]

`.rrd` 将 Rerun 元数据组织于 Apache Arrow RecordBatch 型的 chunk 中，并用 footer index 支持随机访问。该数据模型可让不同频率的相机、点云、IMU、关节状态、轨迹与后处理结果共享记录、查询和回放语义；同时，Rerun 特有的 schema、SDK、blueprint 和 catalog 语义仍可能形成迁移成本，应以导出和替代演练核验。[来源：本页 Raw]

报告记录的 MCAP 支持为实验性：常见 ROS 2 消息可被语义化导入，但自定义 message、tf transforms、ROS1 与部分 protobuf 的可视化仍有限制。不能因“支持 MCAP”而默认其覆盖人形机器人自定义力觉、时钟同步、标定、控制与仿真数据。[来源：本页 Raw]

## 商业化、生态采用与训练接口

Rerun 在 2023-02 发布 OSS beta。报告记载其早期获得 320 万美元 pre-seed；2025-03 公开 1,700 万美元 seed，由 Point Nine 领投；按两次公开金额相加为 2,020 万美元。这是融资披露，不是收入、估值、现金余额或商业质量证明。[来源：本页 Raw]

Rerun 官方材料提及 Meta、Google、Hugging Face LeRobot 与 Unitree 在各自开源工作中采用其可视化。这只构成生态采用线索，不证明这些组织是付费客户、Hub 用户、投资方、联合研发方或收入来源。[来源：本页 Raw]

Rerun 的 PyTorch dataloader 与 LeRobot export 证明数据可被训练流程读取或导出；它们不等于训练框架、数据采买、标注服务或完整 MLOps。Hub 被公开定位为商业 catalog/storage engine，但处于 private preview，公开材料尚未闭环其部署地域、权限、审计、DPA、KMS、SLA、定价、对象存储 egress、并发与企业客户情况。[来源：本页 Raw]

## 投资、并购与行动建议

- **采购：P0。** 用 6—8 周、可脱敏的 manipulation/locomotion 失败分析或 VLA policy 评测回放，验证 ROS 2/MCAP 和内部数据接入、时间/空间对齐、查询、故障定位、训练导出、权限审计与退出完整性。第一阶段使用开源 SDK、本地 RRD 或自托管 catalog。
- **投资：P1 战略观察。** 开源切入、物理数据模型与融资提供正面线索；Hub 转化、收入/毛利、存储成本、客户集中、数据治理、格式锁定和支持能力仍未闭环。
- **并购：暂不启动。** 只有 PoC 证实其成为本公司数据闭环不可替代层，且 IP、团队、Hub 控制面和开源治理权利可获得时再评估。
- **自研边界。** 保留数据权属、采集协议、标签标准、隐私合规、任务／失败 taxonomy、数据选择策略、模型评估与边缘运行时的控制；可采用通用时空数据可视化、recording、query/transform 与部分 dataloader 接入。

详细的证据缺口与验证动作见 [Rerun关键尽调问题](../questions/Rerun关键尽调问题.md)。

## 分类

- 主类型：[7 数据服务](../segments/7-数据服务.md)（中高置信）。其 SDK、RRD、catalog、查询、变换、审阅、导出和训练读取围绕客户自有 Physical AI 数据的生命周期与研发闭环创造价值。
- 不设正式次分类。dataloader 与 LeRobot export 不是 5.1 训练框架，也没有公开人工标注、数据采集或训练数据售卖业务；Hub private preview 亦不足以作为成熟托管数据湖或通用云服务证据。
