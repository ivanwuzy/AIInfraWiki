# 云、容器、调度与监控替代路线：一手公开文档摘录

> Source: https://docs.openstack.org/install-guide/overview.html ; https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/ ; https://slurm.schedmd.com/overview.html ; https://prometheus.io/docs/introduction/overview/ ; https://github.com/zstackio/zstack
> 
> Collected: 2026-08-09
> 
> Published: Unknown（网页版本随项目更新）

以下为公开项目的原文摘录，用于说明横向比较对象的产品边界。它们并不证明这些项目与上海云轴科技股份有限公司存在竞争、合同、代码贡献、IP、合作或客户关系。

## OpenStack

> The OpenStack project is an open source cloud computing platform that supports all types of cloud environments. The project aims for simple implementation, massive scalability, and a rich set of features.

> OpenStack provides an Infrastructure-as-a-Service (IaaS) solution through a variety of complementary services. Each service offers an Application Programming Interface (API) that facilitates this integration.

> This guide is not intended to be used for production system installations, but to create a minimum proof-of-concept for the purpose of learning about OpenStack.

## Kubernetes scheduler

> Kubernetes Scheduler is a control plane component that assigns Pods to Nodes.

> The scheduler determines which Nodes are valid placements for each Pod in the scheduling queue according to constraints, and then ranks each valid Node and binds the Pod to a suitable Node.

## Slurm

> Slurm is an open source, fault-tolerant, and highly scalable cluster management and job scheduling system for Linux clusters.

> Slurm provides three key functions. First, it allocates exclusive and/or non-exclusive access to resources (compute nodes) to users for some duration of time so they can perform work. Second, it provides a framework for starting, executing, and monitoring work (normally a parallel job) on the set of allocated nodes. Finally, it arbitrates access to resources by managing a queue of pending work.

## Prometheus

> Prometheus is an open-source systems monitoring and alerting toolkit originally built at SoundCloud.

> The Prometheus ecosystem consists of multiple components, many of which are optional: the main Prometheus server which scrapes and stores time series data; client libraries for instrumenting application code; a push gateway for supporting short-lived jobs; special-purpose exporters; an alertmanager to handle alerts; various support tools.

> Prometheus works well for recording any purely numeric time series. It fits both machine-centric monitoring as well as monitoring of highly dynamic service-oriented architectures.

## GitHub 中的同名开源项目（需与题目法人隔离）

GitHub 页面显示：

> zstackio / zstack Public

> ZStack - the open-source IaaS software

> ZStack is open source IaaS(infrastructure as a service) software aiming to automate datacenters, managing resources of compute, storage, and networking all by APIs.

> Licensed under the Apache License, Version 2.0.

该 GitHub 页面未提供上海云轴科技股份有限公司的法定主体证明、著作权链、商标/IP 归属、雇佣关系或商业版授权链。因此它只能作为同名开源仓库的公开事实，不能自动计入题目法人资产、研发投入、客户、收入或可收购 IP。
