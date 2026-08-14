# ClouderaTaikun收购范围与商业化尽调

> Sources: 横纵研究报告，2026-08-12
> Raw: [Cloudera（Taikun 业务线）横纵分析报告](../../raw/sources/2026-08-12-cloudera-taikun-business-line-hv-analysis-report.md)
> Updated: 2026-08-13

## 问题

Cloudera 收购 Taikun 后，Cloud Factory 是否具备可核验的资产承接、独立或清晰包含的商业边界、生产支持能力，以及适用于机器人多环境数据和集群的可退出采购条件？

| 尽调问题 | 支持证据 | 反对／缺口 | 下一步验证 |
|---|---|---|---|
| Taikun 的收购与资产承接范围 | 2025-08-04 收购公告、域名跳转、Cloudera 产品页和 Cloud Factory 文档支持收购与产品整合。 | 未公开 SPA、法定收购实体、IP／商标转让清单、旧合同转让或留任安排。 | 索取 SPA、交割文件、商标／代码／开源合规清单、雇佣与客户合同承接材料。 |
| 收购前主体、股东和融资 | 旧站出现 Itera Technologies, a.s. 和 taikun.cloud a.s.，Adam Skotnicky 以 CEO & Founder 身份出现。 | 品牌、版权和 GitHub 组织不能证明最终法定母公司、cap table、估值或交易倍数。 | 查询 Czech commercial register，取得股东名册、董事会记录和卖方 cap table。 |
| Cloud Factory 的商业化与支持 | 当前有产品页、文档和试用／演示入口；支持多类公有与私有环境。 | 未披露独立 SKU、价格、收入、续费、客户、升级成功率、SLO 或支持责任矩阵。 | 获取 SKU／包含关系、报价、支持条款、12 个月 incident 与升级记录，并访谈至少两家非推荐客户。 |
| 机器人工作负载适配 | 集群导入、权限、审计、配额、监控、备份、API／CLI／Terraform 是可见产品面。 | 缺 GPU／XPU、网络、存储、air-gap、训练／推理、迁移、故障恢复及机器人现场部署的生产验证。 | 在目标硬件和真实数据处理／模型评测工作负载上，测试升级回滚、节点故障、权限回收、数据不出域和配置导出。 |

P0 证据未闭环前，Cloud Factory 只能进入非关键数据处理、评测或隔离环境的可回滚 PoC；不得作为机器人训练、推理或工厂生产的单一控制面，也不得作为对 Taikun 投资或并购估值的依据。

