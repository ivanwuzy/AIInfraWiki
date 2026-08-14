# 星云智联数据中心 DPU 产品页（D1205CQ、D1055AS）

> Source: http://www.nebula-matrix.com/DPU?x=1；http://www.nebula-matrix.com/dpu200
> Collected: 2026-08-09
> Published: Unknown

以下为公司官网产品页的原文节选，删除了导航、页脚和重复的联系方式。

## DPU 产品目录

NebulaMatrix DPU

D1205CQ

NebulaMatrix DPU

D1055AS

硬件卸载 极致性能 灵活开放

## 产品概述 | D1205CQ DPU

NebulaMatrix D1205CQ 是星云智联面向云计算、智能计算场景推出的 2x100G 数据处理单元。它同时支持网络卸载、存储卸载和管理面卸载。

- 32M 大容量高性能硬件流表：通过专用流表存储器，实现转发性能不随流的数量增加而降低。
- 4 级硬件层次化 Qos：便于进行资源隔离和精细化 Qos 管理。
- 硬件辅助的高性能 vDPA：既能保证转发性能，又能支持虚拟机热迁移。
- 即插即用的 RoCE 方案：通过自研拥塞控制算法，实现在普通的 IP 网络上运行RoCE v2，不依赖于交换机实现无丢包网络。

### 产品规格

- 尺寸：全高半长双槽位
- PCIe接口：PCIe Gen4 x16 (或2个PCIe Gen4 x8)
- 网络接口：2x100GbE QSFP56/28
- 管理网口：1000Base-T (RJ45)
- BMC网口：1000Base-T (RJ45)
- CPU：Intel Xeon 8核16线程
- FPGA：Intel Agilex 系列
- CPU：DRAM 32GB
- SSD容量：240GB/480GB
- 功耗：典型功耗130w，最大功耗170w
- 电源：PCIe插槽供电，+辅助电源供电
- 散热：被动散热
- 调试接口：UART和JTAG，USB接口
- 管理功能：板载BMC和OOB管理接口
- 加载升级：支持通过带外带内对固件和应用程序进行在线升级

### 网络特性

- 高速网络连接：支持2*100G带宽，以及硬件bond
- Overlay网络加速：VXLAN、Geneve、NVGRE等Overlay网络加速
- 弹性网络资源管理：支持动态VF和队列数分配，单设备最大队列数可扩展
- 可编程可定制数据面
- 硬件流表：默认16M条，可扩展至32M条
- 转发性能：80M pps（双向总和），2x100Gbps（上下行均是）
- PFs/VFs： Virtio-net ，支持最大1K设备，其中PF最大32
- 硬件队列：默认1K pair，队列中断2K，配置中断1K
- 卸载能力：TOE，隧道加/解封装、内外层分流，流表规则卸载
- IPv4/IPv6双栈：支持（含隧道overlay）
- 端口镜像：支持本地镜像和远端镜像
- 硬件流控：4级硬件流控

### RDMA 特性

- 协议：RoCEv2, RC/UD
- QP：256K • QoS：DCQCN，NBLCC （星云智联自研拥塞控制算法）
- 负载均衡：支持
- 存储支持：支持NoF、iSER 、NFS over RDMA
- 重传优化：支持自适应重传，尾包探测

### 存储特性

- 存储接口：Virtio-blk
- 存储设备：1K PF/VF
- 存储性能：2M IOPS
- 硬件队列：默认1K，队列中断2K，配置中断1K
- 云盘启动：支持
- 高可用：硬件支持Inflight I/O恢复机制
