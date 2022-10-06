/**
 * CitationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getAllPendingCitations: async (req, res) => {
    try {
      console.log(req.query);
      let studentId = req.query.student_id;
      let pendingCitations = await Citation.find({
        student_id: studentId,
        pending: 1,
      });
      return res.status(200).json({ pendingCitations });
    } catch (error) {
      console.log(error);
      return res.badRequest(new Error("Server Error"));
    }
  },

  getPendingCitationsByCurriculum: async (req, res) => {
    try {
      console.log(req.query);
      let studentId = req.query.student_id;
      let curriculumId = req.query.curriculum_id;
      let pendingCitations = await Citation.find({
        student_id: studentId,
        curriculum_id: curriculumId,
        pending: 1,
      });
      return res.status(200).json({ pendingCitations });
    } catch (error) {
      console.log(error);
      return res.badRequest(new Error("Server Error"));
    }
  },

  getHistoricCitations: async (req, res) => {
    try {
      console.log(req.query);
      let studentId = req.query.student_id;
      let historicCitations = await Citation.find({
        student_id: studentId,
        pending: 0,
      });
      return res.status(200).json({ historicCitations });
    } catch (error) {
      console.log(error);
      return res.badRequest(new Error("Server Error"));
    }
  },
};
