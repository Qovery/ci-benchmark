FROM alpine:3.21
RUN echo "probe nproc=$(nproc)"; \
    grep -m1 'model name' /proc/cpuinfo || true; \
    echo "probe processors=$(grep -c ^processor /proc/cpuinfo)"; \
    free -m; \
    cat /sys/fs/cgroup/cpu.max 2>/dev/null || true; \
    date +%s > /probe
