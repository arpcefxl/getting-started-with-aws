# How to Create an AWS VPC Using the Console Wizard

Follow these steps to create a Virtual Private Cloud (VPC) in AWS using the AWS Management Console.

## Step 1: Sign In to the AWS Management Console

1. Open your web browser and navigate to the [AWS Management Console](https://aws.amazon.com/console/).
2. Enter your AWS account email and password to log in.

## Step 2: Access the VPC Dashboard

1. Once logged in, use the search bar at the top of the console to search for "VPC".
2. Click on the **VPC** service from the dropdown list to open the VPC Dashboard.

## Step 3: Launch the VPC Wizard

1. In the VPC Dashboard, click on the **Launch VPC Wizard** button.
2. The VPC Wizard page will open, displaying various configuration options.

## Step 4: Choose a VPC Configuration

1. Select the desired VPC configuration. For a simple setup, choose **VPC with a Single Public Subnet**.
2. Click **Select** to proceed with your configuration choice.

## Step 5: Configure the VPC

1. Enter a name for your VPC in the **VPC name** field, e.g., `MyVPC`.
2. Specify the **IPv4 CIDR block**, e.g., `10.0.0.0/16`.
3. For the public subnet:
   - Enter a name in the **Subnet name** field, e.g., `MyPublicSubnet`.
   - Specify the **Subnet's IPv4 CIDR**, e.g., `10.0.1.0/24`.
   - Select an **Availability Zone**, or choose **No Preference** for AWS to allocate one automatically.

## Step 6: Configure Additional Settings (Optional)

1. If needed, adjust options for **Service Endpoints**, **VPC endpoint**, **Enable DNS hostnames**, and **Hardware tenancy**.
2. These settings are optional and can be left with their default values for most scenarios.

## Step 7: Review and Create

1. Review all settings to make sure they are correct.
2. Click **Create VPC** to launch your configured VPC.
3. You will see a confirmation screen with details about the resources being created.

## Step 8: Confirmation

1. Once the VPC is successfully created, you will receive a message confirming the creation.
2. You can now begin deploying applications and services within your new VPC.
