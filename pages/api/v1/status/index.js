function status(request, response) {
  response.status(200).send({
    teste: true,
  });
}

export default status;
