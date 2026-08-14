# Rerun关键尽调问题

> Sources: 横纵研究报告，2026-08-11
> Raw: [Rerun 横纵分析报告](../../raw/sources/2026-08-11-rerun-横纵分析报告.md)
> Updated: 2026-08-11

## 问题

Rerun 是否值得从开发诊断 PoC 扩展为商业数据层，取决于其主体与 IP、Hub 的安全和商业成熟度、机器人数据兼容性、开放生态的转化及格式退出边界。这些均未由报告中的公开资料完全闭环；本页不把开源采用或 private preview 当作客户、订单或生产 SLA 的证据。关联研究对象见 [Rerun](../companies/Rerun.md)。

| 尽调问题 | 支持／限制证据 | 影响 | 下一步验证 |
|---|---|---|---|
| 主体、IP 与合同承接 | 隐私政策和网站版权指向 Rerun Technologies AB；未核验登记、关联主体、软件著作权、商标、cap table、雇佣／发明归属或云服务合同实体。 | 决定采购责任、投资标的和并购可获得资产。 | 获取公司登记、股东名册、IP／许可证清单、商标、雇佣与发明转让、DPA 及实际合同。 |
| Hub 的安全、驻留与商业成熟度 | Hub 被描述为商业 catalog/storage engine，但仍为 private preview；公开材料未充分披露地域、RBAC、审计、KMS、DPA、SLA、定价、egress、灾备、客户或规模。 | 敏感机器人数据是否可进入商业服务，以及其单位经济性与供应风险。 | 索取 availability、部署与数据地域、认证、DPA、KMS、审计、删除／导出、SLA、价格和对象存储责任证明；做小范围安全评审。 |
| ROS/MCAP 与自定义机器人数据兼容 | 常见 ROS 2 message 可语义化导入；MCAP 支持是实验性，自定义 message、tf transforms、ROS1 和部分 protobuf 仍有边界。 | 决定是否能覆盖手部力觉、关节、时钟、标定、控制和仿真数据。 | 用真实 topic/message/transform、时间同步和内部 schema 执行兼容矩阵与失败回放 PoC。 |
| 训练闭环的真实效率 | catalog、SQL/dataframe、PyTorch dataloader 和 LeRobot export 提供数据读取路径；dataloader 为 experimental，且不含训练、标注或数据采买。 | 决定其是可采购的数据工具，还是值得扩大部署的数据层。 | 对照自建对象存储、湖仓和脚本，测量接入、检索、故障复现、dataset 构建、训练读取、迁移与全周期成本。 |
| 开源采用向商业收入转化 | 官方提及 Meta、Google、Hugging Face LeRobot、Unitree 的开源工作采用可视化；未披露付费账户、Hub 设计伙伴、ARR、留存、毛利或集中度。 | 不可把生态影响力、融资或社区采用误判为投资价值。 | 核验开源与付费漏斗、Hub design partners、合同、ARR、净留存、毛利、客户访谈和集中度。 |
| `.rrd`／schema 的可迁移性 | RRD 建于 Arrow RecordBatch，且有 dataframe、处理和导出路径；Rerun schema、catalog/blueprint 语义与 API 演进仍可能增加锁定。 | 决定长期替换成本与数据主权。 | 验证原始与派生数据、可视化配置和 dataset 定义的可导出性；演练替代工具读取与版本迁移。 |
