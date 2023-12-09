# AWS Lambda Custom Authorizer

This repository contains a Node.js AWS Lambda function designed to be used as a custom authorizer for AWS API Gateway. The authorizer function evaluates the `authorizationToken` provided in the event object and returns an IAM policy document granting or denying access.

## Overview

The Lambda function `handler` serves as a custom authorizer. It evaluates an `authorizationToken` from the event object. If the token matches a predetermined value (`"abc123"`), the function allows access; otherwise, it denies access.

The response from this function is an IAM policy document, which either allows or denies access to the AWS API Gateway endpoints.

## Configuration

The function relies on environment variables for configuration:

- `process.env.accNum`: AWS Account Number.
- `process.env.api`: API Gateway API ID.
- `process.env.region`: AWS Region for the API Gateway.

## Function Details

### `auth(event)`

This is the core function that evaluates the provided token. It compares the token with a hardcoded value (`"abc123"`) and returns an IAM policy document with `Allow` or `Deny` as the effect.


## Usage

To use this Lambda function as an AWS API Gateway custom authorizer:

1. Deploy the function to AWS Lambda.
2. Set the required environment variables (`accNum`, `api`, `region`).
3. Configure your AWS API Gateway to use this Lambda function as a custom authorizer.

## License

MIT License.
