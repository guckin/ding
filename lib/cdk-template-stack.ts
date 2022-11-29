import {Stack, StackProps} from 'aws-cdk-lib';
import {Construct} from 'constructs';
import {JsonPath, StateMachine, StateMachineType} from 'aws-cdk-lib/aws-stepfunctions';
import {JsonSchemaType, Model, RestApi, StepFunctionsIntegration} from 'aws-cdk-lib/aws-apigateway';
import {AttributeType, Table} from 'aws-cdk-lib/aws-dynamodb';
import {DynamoAttributeValue, DynamoPutItem, LambdaInvoke} from 'aws-cdk-lib/aws-stepfunctions-tasks';
import {Runtime} from 'aws-cdk-lib/aws-lambda';
import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs';
import * as path from 'path';

export class CdkTemplateStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);




    }
}
