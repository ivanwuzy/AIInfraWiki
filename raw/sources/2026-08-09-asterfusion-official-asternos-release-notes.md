# AsterNOS - DataCenter Release Note

> Source: https://asterfusion.com/downloadcenter/asternos-datacenter-release-note/
> Collected: 2026-08-09
> Published: Unknown（页面列出各版本发布日期）

页面称，AsterNOS 网络操作系统面向 AIDC 和通用云数据中心网络场景优化，预装在星融元 CX-N 系列数据中心交换机内，同时兼容部分基于 Broadcom Trident 3（BRCM TD3）平台的第三方白盒交换机设备。

页面列出的 AsterNOS V3.1 版本记录包括：

- R0407P01（2025-01-09）：静态模式 AIDC 智能选路、AsterNOS Exporter 毫秒级数据采集、监控告警可视化、IPv6 Telemetry 等；
- R0408P01（2025-07-21）：动态智能选路、部分机型 Easy RoCE、CX864E-NT 上 RDMA 目的 QP 字段 Hash 等；
- R0409P00（2026-02-13）：AIDC 控制器、ECN over VXLAN 等；
- R0409P01（2026-07-20）：前端网络微分段、SLA 信息获取和告警、INT、Fast CNP 等条目，且各项明确列出了适用机型；
- R0409P01.1（2026-08-05）：增加系统启动进度显示；
- R0500P00（2026-01-23）：支持 Cisco-like CLI、REST API、NETCONF 和 gNMI。页面明确写明：该版本为 PoC 版本，PBR、Multicast、AAA、INT、AsterNOS Exporter、AIDC Intelligent Routing、PTP 暂不支持；
- R0500P01（2026-05-24）：DCB/RoCE 增加 Fast CNP，INT 增加部分配置与 REST API 管理，Exporter 增加 INT 配置采集；页面同样明确写明“本版本为 PoC 版本”，Multicast、AIDC Intelligent Routing、PTP 暂不支持。

R0409 系列适用机型页列出 CX308P-48Y-NF、CX532P-NT、CX532P-NF、CX564P-NT、CX664D-NT、CX732Q-NT、CX732Q-NF、CX864E-NT 等。该页面是版本功能与支持边界的产品自述，不包含第三方性能复测、客户验收报告或完整硬件兼容矩阵。
