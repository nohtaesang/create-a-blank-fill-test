function getSubjectList(ownerId: number) {
	return {
		type: 'GET_SUBJECTS_LIST',
		payload: ownerId
	};
}

function getQuestionList(subjectId: number) {
	return {
		type: 'GET_QUESTION_LIST',
		payload: subjectId
	};
}
