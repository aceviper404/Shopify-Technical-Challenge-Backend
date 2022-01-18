package com.mmeban.tracking.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mmeban.tracking.model.Items;
import com.mmeban.tracking.repository.InventoryRepository;

@RestController	
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/inventory")
public class InventoryController {
	
	@Autowired
	private InventoryRepository inventoryRepository;
	
	//api to get list inventory
	@GetMapping("/getAll")
	public List<Items> getAllItems(){
		return inventoryRepository.findAll();
	}
	
	@GetMapping(path = {"/{id}"})
	public Items getItem(@PathVariable long id) {
		Items i= inventoryRepository.findById(id).get();
		return i;
	}
	
	//api to post item in inventory
	@PostMapping("/addItem")
	public void addItem(@RequestBody Items item) {
		inventoryRepository.save(item);
	}
	
	//api to put item with id
	@PutMapping(path = {"/{id}"})
	public ResponseEntity<Items> editItem(@PathVariable long id, @RequestBody Items item) {
		Optional<Items> repoitem = inventoryRepository.findById(id);
		
		if(repoitem.isPresent()) {
			Items currentItem = repoitem.get();
			currentItem.setName(item.getName());
			currentItem.setPrice(item.getPrice());
			currentItem.setDescription(item.getDescription());
			return new ResponseEntity<Items>(inventoryRepository.save(currentItem), HttpStatus.OK);
		}
		else {
			return new ResponseEntity<Items>(HttpStatus.NOT_FOUND);
		}
	}
	
	//api to delete item using id
	@DeleteMapping(path = {"/{id}"})
	public Items deleteItem(@PathVariable long id) {
		Items i = inventoryRepository.findById(id).get();
		inventoryRepository.deleteById(id);
		return i;
	}

}
