import {Stack, StackProps} from 'aws-cdk-lib';
import { AttributeType, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Topic } from 'aws-cdk-lib/aws-sns';
import {Construct} from 'constructs';



export class DingStack extends Construct {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id);
        new InvitesStack(scope, 'InvitesStack', props);
    }
}
export class InvitesStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);       
        this.invitesTable();
        this.invitesCreatedTopic();
        this.createInviteFunction();
    }

    private readonly invitesTable = () => new Table(this, 'InvitesTable', {
        partitionKey: {
            name: 'id',
            type: AttributeType.STRING
        },
        tableName: 'InvitesTable',
    });

    private readonly invitesCreatedTopic = () => new Topic(this, 'SnsTopic');

    private readonly createInviteFunction = () => new NodejsFunction(this, 'InviteHandler', {
        entry: 'lib/invite-create.ts',
        handler: 'inviteCreate',
        runtime: Runtime.NODEJS_16_X
    });
}
