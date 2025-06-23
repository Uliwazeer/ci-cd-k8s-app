# 🚀 CI/CD Pipeline with Kubernetes, Jenkins, Docker, Prometheus, Grafana

This project demonstrates a complete DevOps CI/CD pipeline setup using:

- Node.js App
- Docker for containerization
- Jenkins for automation and pipelines
- Kubernetes for container orchestration
- Prometheus & Grafana for monitoring

---

## 🎯 Features
- ✅ CI/CD pipeline with Jenkins
- ✅ Docker image build and push to DockerHub
- ✅ Kubernetes deployment using Minikube
- ✅ Prometheus metrics + Grafana dashboards
- ✅ Unit tests with Jest
- ✅ Live health check & monitoring

---

## 🧰 Tools & Technologies
- Node.js, Express.js, Jest
- Docker, DockerHub
- Jenkins with Docker Agent
- Kubernetes (Minikube)
- Prometheus, Grafana
- Helm
- WSL2 + Ubuntu for local development

---

## 🏗️ Setup Instructions
Refer to the "🚀 Steps to Run" section for detailed WSL-compatible instructions.

---

## 📷 Proof of Running
I have included screenshots for all tools and environments:
- Jenkins Pipeline Console Logs ✅
- DockerHub Repository (Image pushed) ✅
- Local Linux WSL Shell for commands ✅
- Kubernetes Dashboard / Output ✅
- Prometheus Target & Grafana Dashboard ✅

---

## 📌 Notes
- Everything was executed inside WSL 2 Ubuntu environment.
- Screenshots serve as validation of hands-on experience.

Feel free to fork the repo, customize the Jenkinsfile, or extend the pipeline with SonarQube or Ingress!

---

## Commands 

✅ Here are **all the commands used** in your project as shown in your `README.md`, organized and ready to copy-paste or document further:

---

### 📦 **Installation Commands**

```bash
sudo apt update && sudo apt install git curl docker.io nodejs npm -y
```

---

### 🧱 **Install Minikube & kubectl**

```bash
# Minikube
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

# kubectl
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
```

---

### 🚀 **Start Minikube**

```bash
minikube start --driver=docker
eval $(minikube docker-env)
```

---

### 🐳 **Docker Build & Push**

```bash
cd app
docker build -t your-dockerhub-username/ci-cd-app:latest .
docker login
docker push your-dockerhub-username/ci-cd-app:latest
```

---

### ☸️ **Kubernetes Deployment**

```bash
cd ../k8s
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f prometheus.yaml
```

---

### 🌐 **Access App via Minikube**

```bash
minikube service ci-cd-app-service
```

---

### ⚙️ **Jenkins Configuration**

```bash
sudo usermod -aG docker jenkins
```

> Restart Jenkins if needed and configure `dockerhub-creds` inside Jenkins UI.

---

### 📊 **Install Prometheus + Grafana using Helm**

```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
helm install prometheus prometheus-community/kube-prometheus-stack
```

---

### 🔁 **Port-forward Grafana UI**

```bash
kubectl port-forward svc/prometheus-grafana 3000:80 -n monitoring
```

> Access Grafana at: [http://localhost:3000](http://localhost:3000)



For more, check the full source at:
GitHub: (https://github.com/Uliwazeer/ci-cd-k8s-app)

## Screenshoots
https://github.com/Uliwazeer/ci-cd-k8s-app/tree/master/images


https://github.com/Uliwazeer/ci-cd-k8s-app/blob/master/images/Screenshot%20(119).png
