
# MapleShield Life - System Architecture

## 1. System Overview

MapleShield Life Customer Portal is a simulated
insurance application hosted on Microsoft Azure.

## 2. Business Functions

- View insurance policy information
- View customer profile information
- View sample insurance claims
- Submit temporary sample claims

## 3. Current Architecture

Frontend: React
Hosting: Azure Static Web Apps
Source Control: GitHub
CI/CD: GitHub Actions
Identity Platform: Microsoft Entra ID
Backend API: Not implemented
Database: Not implemented

## 4. Key Assets

See asset-inventory.csv.

## 5. Data Flows

DF-001: Browser to Azure Static Web Apps
DF-002: Azure Static Web Apps to Browser
DF-003: Developer to GitHub
DF-004: GitHub Actions to Azure
DF-005: Portal UI to Browser Memory

## 6. Trust Boundaries

- Public Internet to Azure-hosted application
- Developer workstation to GitHub
- GitHub Actions to Azure deployment environment

## 7. Data Classification

All customer information is synthetic.

No real insurance customer data is processed.

## 8. Current Architecture Limitations

- No customer authentication
- No persistent database
- No backend authorization
- No server-side claim processing
- No implemented application-level audit trail

## 9. Assessment Note

This document describes the current lab architecture,
not a production-ready insurance platform.

Business impact scenarios will be simulated separately
from the actual lab environment.
