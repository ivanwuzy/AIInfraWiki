# Astera Labs（Astera Labs, Inc.）横纵分析报告

> Source: 本地文件 `横纵研究报告/AsteraLabs_横纵分析报告.md`
> Collected: 2026-08-11
> Published: Unknown

> 原始资料说明：本条目保存本批次导入所依据的本地横纵研究报告的原文事实摘录；完整报告位于上述本地源文件。研究截止日为 2026-08-11，覆盖 AI 机架级互连、PCIe/CXL 与以太网信号调理；证据口径优先采用 SEC 披露与公司公告，设计导入、演示和合作均不等同于量产订单或收入。

Astera Labs 是一家无晶圆厂的高速互连半导体公司：它把 PCIe、CXL、以太网等开放协议做成可在 AI 服务器和机架中部署的 retimer、主动电缆模块、CXL 内存控制器与 fabric switch，并以嵌入式 COSMOS 软件提供链路遥测、配置和诊断；它卖的是让昂贵的加速器、内存和 I/O 在更长距离、更复杂拓扑中仍能可靠互通的连接能力，不是 GPU、HBM 或完整云网络。

Astera Labs 成立于 2017 年 10 月。联合创始人 Jitendra Mohan 任 CEO，Sanjay Gajendra 任总裁兼 COO；两人在创办前均任职于 Texas Instruments，也都经历过 National Semiconductor。Mohan 在 TI 的职位是产品线总经理，Gajendra 在 TI 与 National 的经历覆盖产品管理、软件和产品线管理。

公司称 2020 年为 Aries 的商业化启动点。Aries 是 PCIe/CXL Smart DSP Retimer：接收受损高速信号、数字恢复并重发，从而延长既有铜互连的可用距离，并降低 PCIe/CXL 在 CPU、GPU/其他加速器、存储与网卡之间的布线约束。Taurus 是 Ethernet Smart Cable Module；Leo 是 CXL Memory Connectivity Controller（IC 和板卡），用于扩展、共享、池化标准 DRAM。Scorpio Smart Fabric Switch 的 P-Series 面向 PCIe Gen6 的 GPU—CPU/NIC/SSD 头节点连接，X-Series 面向后端 AI 加速器集群。COSMOS 覆盖链路管理、fleet management 与 RAS（可靠性、可用性、可维护性），但不同于开发者可在其上编写 AI 算子的通用加速计算软件栈。

公司在 2024 年 3 月于 Nasdaq 上市。报告记录：2025 年收入为 8.525 亿美元，同比增加 115%，GAAP 净利润 2.191 亿美元，毛利率 75.7%；年报将增长归因于 Aries、Scorpio、Taurus 的更高出货量，以及硬件模块和 Scorpio 占比提高带来的平均售价变化。2025 年前三大终端客户仍合计约占收入 86%。报告也记录 TSMC 为唯一晶圆伙伴，且封测依赖 ASE/Amkor 等少数伙伴。

报告记录，2025 年 Q1 公司称 PCIe Gen6 Scorpio P-Series、Aries 6 retimer、Aries 6 cable module 正在出货；Q2 称 PCIe 6 产品组合已在定制机架级 AI 系统进入 volume production，并新增 Scorpio 的多项 design wins；设计导入的最终量与收入仍须后续财报确认。公司于 2025-11-10 完成对德国 aiXscale Photonics 的收购，现金对价 3,110 万美元，取得光纤—芯片耦合技术。报告明确：截至截止日，aiXscale 的可计量协同收入和可量产的 Astera 光产品尚未被单独披露，且不应归为已验证的光计算业务。

Astera 的主要对手包括 Broadcom、Credo、Marvell、Microchip、Montage、Parade 与 Rambus。报告认为其主要交付物是 IC、模块、板卡和 switch，未披露其向市场交付跨机架网络所需的完整交换/路由、拥塞控制、拓扑、SLA 与运维服务。因此其产业链定位更接近加速器、内存、服务器节点之间的 Scale-up 互连器件与 fabric，而不是完整的 Scale-out 网络解决方案。

报告建议，对人形机器人公司，Astera 应作为集中式模型训练、仿真和大规模数据回放的服务器/集群选型验证项，而非机器人本体 BOM；在 PCIe Gen6 的 GPU/CPU/NIC/SSD 拓扑中评估 Aries/Scorpio，若主机与软件支持 CXL，再单独评估 Leo memory pooling。验收应覆盖真实 VLA 训练吞吐、collective 延迟、GPU 空闲率、P99 链路恢复、单机架功耗、故障隔离与固件回滚。多机架训练网络不能把 Astera 单独当作完整 scale-out 网络供应商。

报告结论：主分类为 1.5 Scale-up 互联通信；不列正式次分类。Taurus 的服务器—交换机以太网连接不足以证明完整 1.6 Scale-out 能力；aiXscale 的光纤—芯片耦合技术不是 1.9 光子/光电计算；Leo 不生产 HBM/DRAM die；COSMOS 没有通用设备编程、编译器、算子与主流框架后端的证据，故不列 2.1 加速计算平台。投资上观察优先；并购上不建议将这家上市公司本体列为现实收购对象；应优先建立供应商无关的机架拓扑、可观测性、失效注入和回归测试能力。
