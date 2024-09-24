import AiringScheduleENGComp from "../AiringScheduleENGComp";

function AiringScheduleENG({ loadingAiringSchedule, airigschedule}){

    return(
        <>
            {!loadingAiringSchedule && airigschedule && (
                <AiringScheduleENGComp airingSchedule={airigschedule}/>
            )}
        </>
    )
}

export default AiringScheduleENG