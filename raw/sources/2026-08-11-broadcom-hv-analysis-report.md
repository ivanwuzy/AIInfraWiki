# Broadcom 横纵分析报告

> Source: 本地文件 `横纵研究报告/Broadcom_横纵分析报告.md`
> Collected: 2026-08-11
> Published: Unknown

> 原始资料说明：本条目保存本批次导入所依据的本地横纵研究报告的原文事实摘录；完整报告位于上述本地源文件。研究截止日为 2026-08-11，研究对象为 Broadcom Inc.（NASDAQ: AVGO）。该报告将监管文件、官方产品页与研究者判断分开，并不将媒体对定制 ASIC 客户的猜测视为订单或收入事实。

Broadcom Inc. 于 2023-11-22 完成 VMware 收购，此后 VMware 的经营结果被并入 Broadcom 的 Infrastructure Software 分部。Broadcom 的 AI 半导体产品范围包括按客户规格开发的 custom accelerators/XPUs、交换与路由芯片、NIC、PHY、光学部件及基于 XPU 的机架/系统；公司不按客户、芯片或 XPU 单列收入。客户自有命名的 TPU、Trainium 或其他芯片不能仅凭行业报道写作 Broadcom 的订单或收入。

报告将 Broadcom 定义为把高速 SerDes、以太网交换/路由、定制 ASIC、NIC/PHY/光器件与企业基础软件并置在同一资产负债表中的大型平台公司。在 AI 基础设施中，其能力重点是把超大规模客户的专用加速器和 Ethernet Fabric 变成可量产的硅、封装、板卡与长期供货，而不是出售通用 GPU。

Broadcom 的技术谱系追溯到 AT&T/Bell Labs、Lucent 与 Hewlett-Packard 的不同来源，并经 LSI、Broadcom Corporation、Brocade、CA、Symantec Enterprise Security 和 VMware 等收购组合而成。2016 年 Avago 完成对 Broadcom Corporation 的收购并采用 Broadcom 名称。2017 年完成 Brocade 收购；2018 年完成 CA Technologies 收购；2019 年完成 Symantec 企业安全业务收购。2022 年 Broadcom 宣布收购 VMware，2023-11-22 完成交割。

FY2025 截至 2025-11-02，Broadcom 总收入为 638.87 亿美元，其中 Semiconductor Solutions 为 368.58 亿美元、Infrastructure Software 为 270.29 亿美元；两分部营业利润分别为 212.32 亿美元和 207.65 亿美元。公司披露一名客户占 FY2025 净收入 32%，同一客户占期末应收账款 44%；前五终端客户约占收入 40%，分销商占总收入 48%。该名客户未被公司命名，收入归于半导体分部。

到 FY2026 Q2（截至 2026-05-03），公司披露季度总收入 221.87 亿美元，其中半导体为 150.09 亿美元、基础设施软件为 71.78 亿美元。管理层在 2026-06-03 的业绩公告中披露来自 AI 的半导体收入为 108 亿美元、同比增长 143%，驱动因素为定制 AI 加速器与 AI 网络，并预计 Q3 AI 半导体收入约为 160 亿美元。108 亿美元是季度 AI semiconductor revenue，不是合并 AI 收入、也不是只来自 ASIC 的收入；160 亿美元是管理层预测而非已实现收入。

VMware 交易的签约时“约 610 亿美元交易价值”与交割会计口径不可直接横比。FY2025 10-K 记录 VMware 股东收到约 307.88 亿美元现金和按拆股后计 5.44 亿股 Broadcom 股票，股票交割日公允价值为 533.98 亿美元。2024-04-23，Broadcom 收购 Seagate 部分 SoC 业务资产，金额为 6 亿美元；该资产与硬盘 SoC 相关，不能扩大解释为 AI 加速器产能。

Broadcom 的官方目录持续列出 Ethernet Switches and Switch Fabric Devices 以及 StrataXGS Switch Solutions。报告将 Ethernet switching/routing、NIC、PHY 和光组件视作 AI/企业/运营商网络的交付物；报告同时强调 ASIC 不等于完整网络，NOS、NIC、光模块、RoCE/拥塞控制、遥测、SLA 和现场支持均需以系统验收。

VMware Cloud Foundation（VCF）整合计算、网络、存储、管理和安全，支持虚拟机与容器/Kubernetes，定位私有云。报告明确 VCF 不等于跨厂商 GPU 调度、机器人实时控制系统或 CUDA-like 加速计算平台；训练的 GPU 调度、RDMA 网络和数据流水线需要单独验收。

报告将 Broadcom 的主分类定为 `1.6 Scale-out互联通信`：最稳定、最可验证的价值创造物是跨服务器/跨机架数据中心的 Ethernet switching & routing silicon、NIC、PHY 与光连接组件。正式次分类为 `1.5 Scale-up互联通信`：NIC、PHY、SerDes/IP 以及定制 ASIC/HBM/先进封装整合服务于加速器、服务器节点和机架内数据移动。报告不将其列为 1.2/1.3/1.4、2.1 或 3.4—3.7：公开材料未给出可独立稳定分类的通用加速器产品族、CUDA-like XPU 软件平台或以集群软件为主的价值承载。

对人形机器人公司，报告建议对 Broadcom ASIC 生态 Ethernet Fabric 与 NVIDIA 系统化 Ethernet/InfiniBand、Cisco/既有网络方案进行同一工作负载的受控双路线 POC；测量端到端有效样本吞吐、99p 作业尾时延、PFC/ECN/RoCE 故障恢复、光链路误码、软件升级与运维人日。定制 ASIC 仅保持战略预研与供应商尽调，不进入近期量产承诺；前置条件包括模型/算子与数据格式稳定、年需求与生命周期覆盖 NRE、HBM/封装/代工供给可锁定、可维护的软件团队及第二来源或 GPU 回退路径。报告不建议以获得技术为目的投资或并购 Broadcom。

报告保留以下未确认事项：占 FY2025 收入 32% 的半导体客户身份；某个云厂自研加速器是否由 Broadcom 设计/代工；108 亿美元 AI 半导体收入中 ASIC 与网络的拆分；VMware 收购是否自然带来 AI 平台协同；以及 Broadcom 是否适合作为机器人端侧/车载主芯片。对此只接受双方公告、合同、客户监管文件或可审计采购资料；不以市场推测补齐。
