import { initialState, QuizState } from ".";
import { Button } from "../ui/button";
import { Text } from "../ui/text";
import { QuizHeader } from "./header";

export function Finished({ state, quiz, setState }: { quiz: QuizDetail, state: QuizState, setState: React.Dispatch<React.SetStateAction<QuizState>> }) {
    return  (
         <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 w-full p-6 ">
            <div>
                <Text variant={"titleS"} asChild>
                    <h1>Quiz completed</h1>
                </Text>
                <Text variant={"titleM"} asChild>
                    <p>Your scored...</p>
                </Text>
            </div>
            <div className="space-y-8">
                <div className="bg-secondary rounded-3xl p-12 space-y-10 flex flex-col items-center justify-between" >
                    <QuizHeader title={quiz.title} icon={quiz.icon} background={quiz.iconBgHex} />
                    <div className="flex flex-col items-center space-y-4">
                        <p className="font-medium text-[5rem]">{state.totalScore}</p>

                        <Text variant={"bodyM"} className="text-navy-grey dark:text-bluish" asChild>
                            <legend>out of {quiz.totalQuestions}</legend>
                        </Text>

                    </div>
                </div>
                <Button variant={"primary"} size={"lg"} className="w-full" onClick={() => setState(initialState)} >
                    <Button.Text variant={'bodyM'}>Play again</Button.Text>
                </Button>
            </div>
         </div>
    )
}
