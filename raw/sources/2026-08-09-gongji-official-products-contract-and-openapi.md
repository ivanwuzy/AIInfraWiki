# 共绩算力官网：产品、服务协议与 OpenAPI 摘录

- Source: https://www.gongjiyun.com/product/serverless/ ; https://www.gongjiyun.com/product/job/ ; https://www.gongjiyun.com/product/server/ ; https://www.gongjiyun.com/product/metal/ ; https://www.gongjiyun.com/product/token/ ; https://www.gongjiyun.com/docs/platform/service-agreement/mlhtwuyvlixjfykpr6fcfrexnth/ ; https://www.gongjiyun.com/docs/platform/openapi/zx3iwhbv1i8sxdkeiapcprxhn8d/
- Collected: 2026-08-09
- Published: 服务协议更新于 2026-07-02；其余 Unknown

以下为页面和服务协议的原文／产品说明摘录。页面展示价格、能力、SLA 与性能均可能更新；除非另有客户合同或第三方验收，不能作为实际企业采购报价或实测结果。

服务协议的主体与合同边界：

> 感谢您使用北京共绩科技有限公司提供的产品及/或服务。

> 本协议是用户与北京共绩科技有限公司（“共绩”）之间具有约束力的协议。

> 若您与共绩另行签署《共绩算力服务合同》，以另行签署的服务合同约定为准。

这证明公开协议不能替代具体客户合同、SLA、价格、数据条款、服务范围或权利归属。

官网公开的产品形态包括：弹性服务部署、Job 批处理、大模型云服务、云主机、裸金属、镜像仓库、共享存储卷及对象存储加速。

服务协议／产品说明：

> 弹性部署、云主机和 Job 使用 GPU 动态分配与容器化资源。

> Job 面向大规模数据处理和 AI 离线计算，支持 Spot 抢占式计费与自动重试。

> 裸金属服务整合多家优质供应商的算力资源。

> 云主机为 Docker 容器实例，并非传统虚拟机；容器重启、销毁或升级后，内部文件系统中的数据可能丢失，用户应使用共享存储、外部对象存储或 Git 等持久化手段。

> 大模型 API 按 Token 或次数计费；月度可用性不低于 99.5%。

“整合多家优质供应商的算力资源”是多供应商资源聚合的公开证据，但未披露供应商名称、数量、卡型、地域、资源所有权、背靠背合同、统一调度范围或跨 XPU 训练／推理性能。99.5% 是协议承诺，不能等同于实际可用性实测。

官网产品页展示的按小时价格（页面展示价，非企业报价、非锁定价格）：

| 卡型 | 显存 | 页面展示价 |
|---|---:|---:|
| 4090 | 24G | 1.98 元/小时 |
| 5090 | 32G | 3.25 元/小时 |
| H20 | 96G | 12.00 元/小时 |
| L20 | 48G | 4.00 元/小时 |
| A800 | 80G | 7.80 元/小时 |
| H800 | 80G | 25.00 元/小时 |
| L40 | 48G | 4.50 元/小时 |
| L40S | 48G | 4.98 元/小时 |

OpenAPI 文档：

> API Base URL: https://openapi.suanli.cn

> OpenAPI 采用 RESTful 风格、HTTPS 传输和 JSON 数据格式。

> 可用于管理算力资源和弹性部署任务，并可在 CI/CD 中创建／启停服务、查询任务／节点与账单。

> 认证方式包括 Token 与 RSA API Key。

OpenAPI 是产品可调用性的公开证据；没有公开的权限隔离审计、可用性报告、客户采用规模、负载上限或安全测试，故不能把接口存在写作生产稳定性证明。

