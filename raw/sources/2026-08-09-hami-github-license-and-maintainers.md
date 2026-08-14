# Project-HAMi/HAMi：开源仓库、维护者与许可证（原文摘录）

> Source: https://github.com/Project-HAMi/HAMi ; https://github.com/Project-HAMi/HAMi/blob/master/MAINTAINERS.md ; https://github.com/Project-HAMi/HAMi/blob/master/LICENSE
> Collected: 2026-08-09
> Published: Unknown（仓库为滚动更新）

以下为 GitHub 公共仓库可见文本摘录。仓库中的个人邮箱/`Employer` 字段和页面版权不构成劳动合同、股权、代码转让、商标注册或中国/新加坡法人之间权属穿透证据。

README：

> HAMi — Kubernetes GPU virtualization and heterogeneous accelerator scheduling for AI infrastructure.

> HAMi stands for Heterogeneous AI Computing Virtualization Middleware. Formerly known as k8s-vGPU-scheduler, HAMi helps platform teams share expensive GPUs and other AI accelerators across Kubernetes workloads, isolate device memory and compute, and schedule pods with device-aware policies without changing application code.

> HAMi is a CNCF Incubating and CNCF Landscape project. It is also listed in the CNAI Landscape.

README 将能力表述为设备共享、资源隔离、设备感知调度、异构 AI 集群和“Zero application changes”，并列举 NVIDIA、昇腾、寒武纪、海光、天数智芯、沐曦、摩尔线程等设备；其生态集成表列 vLLM、Volcano、Kueue、Prometheus、Grafana 和 NVIDIA GPU Operator。README 还写道：

> HAMi is governed by maintainers and contributors. Governance is described in the HAMi community repository.

`MAINTAINERS.md` 中的 `HAMi Committers` 表列：

| Maintainer | Email | Employer |
| --- | --- | --- |
| Li Mengxuan | archlitchi@gmail.com | dynamia.ai |
| Xiao Zhang | xiaozhang0210@hotmail.com | dynamia.ai |
| Wang Leibo | wang.platform@gmail.com | Nvidia |
| Yin Yu | nimbus-nimo@proton.me | Independent Developer |
| Shouren Yang | yangshouren@gmail.com | 4Paradigm |

README 写明：

> HAMi is licensed under the Apache License 2.0. See LICENSE for details.

LICENSE 的授权文字包括每个 Contributor 授予永久、全球、非排他、免许可费、不可撤销的版权许可，以及相应的专利许可（受其条款约束）。仓库页还写明：

> Copyright Contributors to HAMi, established as HAMi a Series of LF Projects, LLC.

这些文本反对把 HAMi 开源库直接估作任一公司可排他收购的专有 IP；企业版的独有代码、商标、SLA、客户数据和服务合同须另行核验。

