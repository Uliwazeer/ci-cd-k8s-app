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

## Screenshoots Of Running Project 
      ## Docker Hub
      ## Jenkins
      ## Kubernetes
      ## Promethus & Grafana
      ## CI/CD
      ## Linux 
      
https://github.com/Uliwazeer/ci-cd-k8s-app/tree/master/images




![Screenshot (120)](https://github.com/user-attachments/assets/c759a43c-c3bb-40e0-a416-71fc84b7fb5d)


![Screenshot (121)](https://github.com/user-attachments/assets/874c2a60-c7ec-4c9d-bba0-57994022bef1)


![Screenshot (122)](https://github.com/user-attachments/assets/cc04e8a6-6e9f-4699-9dba-3110b697a32c)


![Screenshot (123)](https://github.com/user-attachments/assets/cdee9bbd-449f-401a-a5b7-7c2bab39b879)

![Screenshot (127)](https://github.com/user-attachments/assets/9debf444-6363-4fc2-b480-ba58abdab09e)


![Screenshot (128)](https://github.com/user-attachments/assets/9b9cfb8b-7d2f-45fd-8dd3-28c02bd3aa72)


![Screenshot (126)](https://github.com/user-attachments/assets/a186e04a-f858-4f64-a6fa-bbff6f976610)


![Screenshot (125)](https://github.com/user-attachments/assets/6f12e5cd-ea51-478c-872e-f324bef75636)


![Screenshot (124)](https://github.com/user-attachments/assets/7706a7bc-aa23-44ea-ae1e-ecec558051c6)


![Screenshot (129)](https://github.com/user-attachments/assets/46eb57c8-78c6-4f8e-985b-56ddc835b12e)


![Screenshot (132)](https://github.com/user-attachments/assets/0015b217-31be-4e87-8783-bc189f34f54e)


![Screenshot (131)](https://github.com/user-attachments/assets/8b8765eb-231e-487a-8a97-b4b5ec36d971)


![Screenshot (130)](https://github.com/user-attachments/assets/f828e0e5-80ec-48c9-86c1-2f18be047ca3)


![Screenshot (133)](https://github.com/user-attachments/assets/58fd8bd8-1c86-485b-9a5d-f848ca1ee769)


![Screenshot (136)](https://github.com/user-attachments/assets/0dbd7588-7103-4b3a-a3ea-ef606785fcf3)


![Screenshot (135)](https://github.com/user-attachments/assets/2b0618f6-f72f-4b07-ba7b-f240f42c880d)


![Screenshot (134)](https://github.com/user-attachments/assets/7ce76491-1caa-4607-8138-e936463adf30)


![Screenshot (143)](https://github.com/user-attachments/assets/f749c93a-4875-438c-9d6f-c05fc1776de2)


![Screenshot (138)](https://github.com/user-attachments/assets/44e8b7d0-40f3-4bee-8b63-5f49e9f42fed)


![Screenshot (141)](https://github.com/user-attachments/assets/9116c663-bb47-4ac1-9571-94249c3eabfa)


![Screenshot (140)](https://github.com/user-attachments/assets/fc530537-81ad-415d-81ff-9f636286805d)


![Screenshot (139)](https://github.com/user-attachments/assets/10853ac7-c493-487f-932f-79b22b6aa6e4)


![Screenshot (137)](https://github.com/user-attachments/assets/bdad7a65-7aa4-434c-ac10-d0a4babeeac0)






