/**
 * InscriptionController
 *
 * @description :: Server-side actions for handling incoming requests related with Inscription.
 */

module.exports = {
  createInscription: async (req, res) => {
    let studentId = req.body.student_id;
    let courses = req.body.courses;
    let citation_id = req.body.citation_id;
    let credits = 0;
    for (let course of courses) {
      credits = +course.credits;
    }
    let newInscription = await Inscription.create({
      citation_id: citation_id,
      student_id: studentId,
      total_credits: credits,
      active: 1,
    });
    for (let course of courses) {
      await InscriptionDetail.create({
        inscription_id: newInscription.id,
        subject_id: course.id,
        credits: course.credits,
      });
    }
    return res.json(newInscription);
  },
};
