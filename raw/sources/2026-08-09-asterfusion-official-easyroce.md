# EasyRoCE：性能之上的智简开放新体验

> Source: https://asterfusion.com/easyroce/
> Collected: 2026-08-09
> Published: 2024-12-20（页面创建日期；内容持续更新）

EasyRoCE 是星融元依托开源、开放网络架构与技术，为 AI 智算、高性能计算等场景的 RDMA 融合以太网（RoCE）提供的一系列实用特性和小工具。页面称其覆盖前期规划实施至日常运维监控，并提供二次开发和集成空间。

页面列出的规划/部署功能包括：AI Infrastructure Descriptor（AID，生成 AIDC 网络配置参数，支持 .xlsx 和 .json）、RoCE Parameter Automation（RPA）、One-click RoCE Deployment（ORD，一条 CLI 或一次 RESTful API 调用启用 RoCE 及下发相关配置）。

页面列出的智能流控功能包括：In-Node Route Map（IRM，GPU 服务器内多 GPU/多网卡路由）、E2E Path Scheduler（EPS，分析呈现 GPU 集群通信环并生成服务器间路由规划）、Proactive Path Definer（PPD，多路径规划）与 Multi-Tenant VPC Deployer（MVD）。

页面列出的监控/运维功能包括：Real-time Traffic Reporter（RTR）、Congestion Monitoring Alert（CMA）、AsterNOS Exporter、RoCE Exporter、NIC Exporter，以及基于 Prometheus 与 Grafana 的 Unified Glancer（UG）。页面也对 RDMA Session Tracer 标注“页面施工中”，并在部分地图/面板条目保留 Lorem ipsum 占位文本。

页面列出 CX864E-N（64×800GE）、CX732Q-N（32×400GE）、CX664D-N（64×200GE）、CX564P-N（64×100GE）、CX532P-N（32×100GE）等 CX-N 系列，并称全系搭载 AsterNOS。页面同时声称“端到端传送能力媲美 IB，局部超越”以及 AsterNOS 在“海内外大规模部署”得到验证；但页面未公开测试拓扑、网卡/固件、消息大小、拥塞配置、样本量、第三方复现或客户验收文件，因此该性能与规模化陈述不能单独用作采购验收结论。
