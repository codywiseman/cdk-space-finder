import { Stack, StackProps} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Code, Function, Runtime} from 'aws-cdk-lib/aws-lambda'
import * as path from 'path'

export class SpaceStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props)

    const helloLambda = new Function(this, 'helloLambda', {
      runtime: Runtime.NODEJS_18_X,
      code: Code.fromAsset(path.resolve(__dirname, '../services/hello')),
      handler: 'hello.main',
      
    })
  }
}