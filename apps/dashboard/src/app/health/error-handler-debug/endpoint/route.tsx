import { StackAssertionError } from "@stackframe/stack-shared/dist/utils/errors";

export function GET() {
  throw new StackAssertionError(`Server debug error thrown successfully! ${Math.random()}`);
}