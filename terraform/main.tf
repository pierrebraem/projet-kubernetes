terraform {
    required_providers {
        google = {
            source = "hashicorp/google"
            version = "6.10.0"
        }
    }
}

resource "google_container_cluster" "appliweb" {
  name="gke-web"
  location="us-central1-a"

  initial_node_count = 1

  monitoring_config{
    managed_prometheus{
        enabled = true
    }
  }
}