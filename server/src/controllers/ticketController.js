import express from "express";
import * as  ticketServices from "../services/ticketServices.js"
import * as ticketStatusServices from "../services/ticketStatusServices.js"

export async function createTicket(req, res) {
    const { title, description, priority } = req.body;

    try {
        const ticketData = {
            title: title,
            description: description,
            priority: priority,
            status: "Open",
            created_by: req.user.user_id,
            org_id: req.user.org_id
        };
        const result = await ticketServices.createTicket(ticketData);
        return res.status(result.status).json(result)
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });

    }


}
export async function getAllTickets(req, res) {
    try {
        const result = await ticketServices.getAllTickets(req.user.org_id, req.user.user_id, req.user.role);
        return res.status(result.status).json(result);
    } catch (err) {
        res.status(500).json({ message: "Internal server error" })
    }
}

export async function getTicketbyId(req, res) {
    try {
        const ticketId = req.params.id;
        const userId = req.user.user_id;
        const userOrgId = req.user.org_id;
        const userRole = req.user.role

        const result = await ticketServices.getTicketbyId(
            ticketId,
            userId,
            userOrgId,
            userRole,
        );

        return res.status(result.status).json(result);

    } catch (err) {
        console.error("CONTROLLER ERROR:", err);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
}
export async function updateTicket(req, res) {
    try {
        const ticketId = req.params.id;
        const updatedData = req.body;

        const result = await ticketServices.updateTicket(ticketId, updatedData, req.user.org_id, req.user.user_id, req.user.role);
        return res.status(result.status).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error"
        })

    }
}
export async function deleteTicket(req, res) {
    try {
        const ticketId = req.params.id;
        const result = await ticketServices.deleteTicket(ticketId, req.user.org_id, req.user.role);
        return res.status(result.status).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Internal server error"
        })
    }
}

//assigning tickets

export async function assignTicket(req, res) {
    try {
        const info = {
            ticketId: req.params.id,
            userId: req.user.user_id,
            org_id: req.user.org_id,
            role: req.user.role,
            assignedTo: req.body.assigned_to
        };

        const result = await ticketServices.assignTicket(info);

        return res.status(result.status).json(result);

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

export async function updateTicketStatus(req, res) {
    try {
        const ticketId = req.params.id;
        const newStatus = req.body.status;
        const user = req.user
        const result = await ticketStatusServices.updateTicketStatus(ticketId, newStatus, user);

        return res.status(result.status).json(result);
    } catch (err) {
        console.error(err);

        return res.status(500).json({
            message: "Internal server error"
        });
    }

}

export async function getAgents(req, res) {
    try {
        const result = await ticketServices.getAgents(req.user.org_id);
        return res.status(result.status).json(result);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}